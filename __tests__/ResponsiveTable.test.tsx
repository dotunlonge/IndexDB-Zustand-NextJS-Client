import React from 'react';
import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import useUserStore from "@/store/userStore";
import ResponsiveTable from '@/components/Dashboard/UserList/ResponsiveTable';
import mockUsers from "@/utils/tests/mockUsers";


// Mock user store with a simplified version for clarity
jest.mock('@/store/userStore', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    fetchUsers: jest.fn(),
    users: [],
    isFetching: false,
  })),
}));


// Mock the next/router useRouter function
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ResponsiveTable', () => {

  let mockStore;

  beforeEach(() => {
    mockStore = {
      fetchUsers: jest.fn(),
      users: mockUsers,
      isFetching: false,
      fetchUserDetails: jest.fn(),
      updateFilterCriteria: jest.fn(),
      selectedUser: null,
      searchQuery: '',
      filterCriteria: {},
    };

    useUserStore.mockImplementation(() => mockStore);

    // Mock useRouter
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

  });

  afterEach(cleanup);

  // Postive Testing Scenarios

  it('renders correctly with mock data', () => {
    render(<ResponsiveTable />);
    expect(screen.getByTestId('responsive-table')).toBeInTheDocument();
  });

  it('displays user data in table rows', async () => {
    const { getByText } = render(<ResponsiveTable />);
    // Wait for the navigation to the dashboard
    await waitFor(() => {
      expect(getByText(mockUsers[0].personalInfo.username)).toBeInTheDocument();
    });
  });

  it('navigates to user detail page on row click', () => {
    const mockRouter = useRouter();
    render(<ResponsiveTable />);
    const firstRow = screen.getByText(mockUsers[0].personalInfo.username).closest('tr');
    fireEvent.click(firstRow);
    expect(mockRouter.push).toHaveBeenCalledWith(`/dashboard/users/${mockUsers[0].personalInfo.username}`);
  });

  // Negative Testing Scenario(s)

  it('displays a message when no users are available', () => {
    mockStore.isFetching = false;
    mockStore.users = [];
    render(<ResponsiveTable />);
    expect(screen.getByText('No users available')).toBeInTheDocument();
  });


});
