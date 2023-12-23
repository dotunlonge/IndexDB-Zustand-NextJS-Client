// pages/dashboard.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Sidebar from '@/components/Dashboard/Sidebar';
import Header from '@/components/Dashboard/Header';
import UserStats from '@/components/Dashboard/UserStats';
import UserDetails from '@/components/Dashboard/UserDetails';
import styles from '@/styles/pages/Dashboard.module.scss';
import Link from "next/link";
import Image from 'next/image';
import useUserStore from "@/store/userStore";

/**
 * UserDetailsDashboard page component.
 * This component is responsible for displaying the user details dashboard.
 * It fetches and displays information of a specific user based on the user ID obtained from the URL.
 *
 * @returns The UserDetailsDashboard page component.
 */
const UserDetailsDashboard: React.FC = () => {

  const router = useRouter();
  const { id } = router.query; // Assuming 'id' is the email of the user
  const { selectedUser, fetchUsers, fetchUserDetails, users, isFetching, clearSelected } = useUserStore();

  const [runOnce, didRun] = useState(false);

  useEffect(() => {
    // Fetch all users if not already fetched
    if (runOnce === false && !users || users.length === 0 && !isFetching) {
      fetchUsers();
      didRun(true)
    }

    // Fetch user details if the ID is available and the selected user is not already loaded
    if ((id && typeof id === 'string' && !selectedUser) || (selectedUser && selectedUser.username !== id)) {
      fetchUserDetails(id);
    }

  }, [ id, fetchUsers, fetchUserDetails, users.length, isFetching, runOnce, selectedUser ]);

  return (
    <div className={styles.dashboard}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.mainContent}>
          {/* Header Panel with Back Link and Action Buttons */}
          <HeaderPanel />

          {/* Conditional Rendering for Loading State and User Details */}
          {(isFetching && !selectedUser) ? <p>Loading...</p> : <UserDetails user={selectedUser} />}
        </main>
      </div>
    </div>
  );
};

/**
 * HeaderPanel component for the UserDetailsDashboard.
 * Contains back navigation link and action buttons for user operations.
 *
 * @returns The HeaderPanel component.
 */
const HeaderPanel: React.FC = () => (
  <React.Fragment>
    <Link id={styles.back} href="/dashboard/users">
      <Image src="/back-arrow.svg" alt="back-arrow" width={30} height={30} />
      Back to Users
    </Link>
    <div className={styles.buttonHeaderPanel}>
      <div><h1 className={styles.heading}>User Details</h1></div>
      <div className={styles.buttons}>
        <button id={styles.blacklist}>Blacklist User</button>
        <button id={styles.activate}>Activate User</button>
      </div>
    </div>
  </React.Fragment>
);

export default UserDetailsDashboard;
