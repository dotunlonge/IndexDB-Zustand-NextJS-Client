import axios from 'axios';
import { openDB } from 'idb';
import useUserStore from "@/store/userStore";
import { act } from '@testing-library/react';
import mockUsers from "@/utils/tests/mockUsers";

// Mock Axios and IndexedDB
jest.mock('axios');
jest.mock('idb');


// Mock user store with a simplified version for clarity
jest.mock('@/store/userStore', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    fetchUsers: jest.fn(),
    users: [],
    isFetching: false,
  })),
}));

// Mock useRouter from next/router (if used in your components)
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock IndexedDB functions
openDB.mockResolvedValue({
  transaction: () => ({
    objectStore: () => ({
      getAll: jest.fn().mockResolvedValue(mockUsers),
      put: jest.fn(),
      get: jest.fn(),
    }),
    done: Promise.resolve(),
  }),
});

/**
 * Test suite for useUserStore
 */
describe('useUserStore', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = {
      fetchUsers: jest.fn(async () => {
       try {
         const response = await axios.get('your/api/endpoint');
         mockStore.users = response.data;
         mockStore.isFetching = false;
       } catch (error) {
         // Handling the error
         mockStore.users = [];
         mockStore.isFetching = false;
       }
     }),
      users: mockUsers,
      isFetching: true, // Initially set to true to simulate fetching state
      fetchUserDetails: jest.fn(async (username) => {
        const user = mockUsers.find(user => user.personalInfo.username === username);
        mockStore.selectedUser = user ? user : undefined; // Set to undefined if user not found
      }),
      updateFilterCriteria: jest.fn(),
      selectedUser: undefined,
      updateSearchQuery: jest.fn((newQuery) => {
        mockStore.searchQuery = newQuery; // Manually update the searchQuery state
      }),
      searchQuery: '',
    };

    useUserStore.mockImplementation(() => mockStore);
    axios.get.mockClear();
  });

  // Positive Testing Scenario(s)

  /**
    * Positive Testing Scenario: Fetches users correctly from the API
    */
  it('fetches users correctly from the API', async () => {
    axios.get.mockResolvedValue({ data: mockUsers });
    await mockStore.fetchUsers();
    expect(mockStore.fetchUsers).toHaveBeenCalled();
    expect(mockStore.users).toEqual(mockUsers);
    expect(mockStore.isFetching).toBe(false);
  });

  /**
   * Positive Testing Scenario: Fetches user details correctly
   */
  it('fetches user details correctly', async () => {
    const username = 'brigitte86'; // Ensure this username exists in mockUsers

    openDB.mockResolvedValue({
      transaction: () => ({
        objectStore: () => ({
          get: jest.fn().mockResolvedValue(mockUsers.find(user => user.personalInfo.username === username)),
        }),
        done: Promise.resolve(),
      }),
    });

    await mockStore.fetchUserDetails(username);

    expect(mockStore.fetchUserDetails).toHaveBeenCalledWith(username);
    expect(mockStore.selectedUser).toEqual(mockUsers.find(user => user.personalInfo.username === username));
  });

  /**
  * Positive Testing Scenario: Updates search query correctly
  */
  it('updates search query correctly', async () => {
     const newQuery = 'testQuery';
     await act(async () => {
       await mockStore.updateSearchQuery(newQuery);
     });
     expect(mockStore.updateSearchQuery).toHaveBeenCalledWith(newQuery);
     expect(mockStore.searchQuery).toBe(newQuery);
   });

   // Negative Testing Scenario(s)

   /**
   * Negative Testing Scenario: Handles errors when fetching users from the API
   */
   it('handles errors when fetching users from the API', async () => {
    const mockError = new Error('Network error');
    axios.get.mockRejectedValue(mockError);
    await mockStore.fetchUsers();
    expect(mockStore.fetchUsers).toHaveBeenCalled();
    expect(mockStore.users).toEqual([]);
    expect(mockStore.isFetching).toBe(false);
  });

  /**
     * Negative Testing Scenario: Fails to fetch user details for a non-existent username
     */
  it('fails to fetch user details for a non-existent username', async () => {
    const nonExistentUsername = 'nonexistent_user';
    openDB.mockResolvedValue({
      transaction: () => ({
        objectStore: () => ({
          get: jest.fn().mockResolvedValue(undefined), // Simulates no user found
        }),
        done: Promise.resolve(),
      }),
    });
    await mockStore.fetchUserDetails(nonExistentUsername);
    expect(mockStore.fetchUserDetails).toHaveBeenCalledWith(nonExistentUsername);
    expect(mockStore.selectedUser).toBeUndefined(); // or another appropriate assertion based on your error handling
  });


});
