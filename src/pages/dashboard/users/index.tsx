// pages/dashboard/users/index.tsx

import React, { useEffect, useMemo } from 'react';
import Head from 'next/head';

import Sidebar from '@/components/Dashboard/Sidebar';
import Header from '@/components/Dashboard/Header';
import UserStats from '@/components/Dashboard/UserStats';
import ResponsiveTable from '@/components/Dashboard/UserList/ResponsiveTable';

import dashboardStyles from '@/styles/pages/Dashboard.module.scss';
import userListStyles from '@/styles/components/UserList.module.scss';

import useUserStore from "@/store/userStore";
import { calculateUserStatistics } from '@/utils/helpers/user';

/**
 * UsersDashboard page component.
 * This component serves as the main dashboard for displaying user-related statistics and a list of users in an admin interface.
 * It utilizes various child components like UserStats and ResponsiveTable to present data.
 *
 * Fetches user data on mount and calculates various statistics for display.
 *
 * @returns {JSX.Element} The UsersDashboard page component.
 */
const UsersDashboard: React.FC = () => {
  const { fetchUsers, users, isFetching } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Calculate user statistics using a custom utility function
  const {
    totalUsers,
    activeUsers,
    usersWithLoans,
    usersWithSavings,
  } = useMemo(() => calculateUserStatistics(users), [users]);

  return (
    <div className={dashboardStyles.dashboard}>
    <Head>
       <title>Users Dashboard - Admin Panel</title>
       <meta name="description" content="Admin dashboard for managing user statistics, including total users, active users, and users with loans and savings." />
       <meta name="keywords" content="admin dashboard, user management, user statistics, user data, admin panel" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
     </Head>
      <Header />
      <div className={dashboardStyles.container}>
        <Sidebar />
        <main className={dashboardStyles.mainContent}>
          <h1 className={dashboardStyles.heading}>Users</h1>
          <UserStats
            totalUsers={totalUsers}
            activeUsers={activeUsers}
            usersWithLoans={usersWithLoans}
            usersWithSavings={usersWithSavings}
          />
          <div className={userListStyles.userList}>
             <ResponsiveTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UsersDashboard;
