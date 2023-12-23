import { create } from 'zustand';
import axios from 'axios';
import { openDB } from 'idb';

import type { UserStore, User } from "@/utils/types/user";

/**
 * Opens the IndexedDB database.
 * @returns A promise that resolves to the opened database.
 */
const openDatabase = async () => {
  return openDB<User>('userDatabase', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'personalInfo.username' });
      }
    },
  });
};

/**
 * Retrieves users from IndexedDB.
 * @returns A promise that resolves to an array of users.
 */
const getUsersFromDB = async () => {
  const db = await openDatabase();
  const tx = db.transaction('users', 'readonly');
  const store = tx.objectStore('users');
  return store.getAll();
};

/**
 * Retrieves a single user from IndexedDB based on username.
 * @param {string} username - The username of the user to retrieve.
 * @returns A promise that resolves to the user object.
 */
const getUserFromDB = async (username: string) => {
  const db = await openDatabase();
  const tx = db.transaction('users', 'readonly');
  const store = tx.objectStore('users');
  return store.get(username);
};

/**
 * Saves an array of users to IndexedDB.
 * @param {User[]} users - The array of users to save.
 */
const saveUsersToDB = async (users: User[]) => {
  const db = await openDatabase();
  const tx = db.transaction('users', 'readwrite');
  const store = tx.objectStore('users');
  for (const user of users) {
    store.put(user);
  }
  await tx.done;
};

/**
 * Creates a Zustand store for managing user data.
 */
const useUserStore = create<UserStore>((set) => ({
  users: [],
  isFetching: false,
  selectedUser: null,
  searchQuery: "",
  filterCriteria: {
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
  },
  updateFilterCriteria: async (criteria) => set({ filterCriteria: criteria }),
  updateSearchQuery: async (searchQuery: string) => set({ searchQuery }),
  clearSelected: async () => set({ selectedUser: null }),
  fetchUserDetails: async (username: string) => {
    const user = await getUserFromDB(username);
    set({ selectedUser: user });
  },
  fetchUsers: async () => {
      if(process.env.NEXT_PUBLIC_USERS_ENDPOINT){
        set({ isFetching: true });
        try {
          const response = await axios.get(process.env.NEXT_PUBLIC_USERS_ENDPOINT);
          const users = response.data as User[];
          if (users.length) {
            await saveUsersToDB(users);
            set({ users, isFetching: false });
          }
        } catch (error) {
          console.error('Error fetching users:', error);
          set({ isFetching: false });
        }
      }
  }
}));

export default useUserStore;
