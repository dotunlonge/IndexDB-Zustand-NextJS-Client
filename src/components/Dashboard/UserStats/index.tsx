// components/Dashboard/UserStats/index.tsx

import React from 'react';
import styles from '@/styles/components/UserStats.module.scss';
import Image from 'next/image';

import type { UserStatProps } from "@/utils/types/user";
import StatCard from "./StatCard";

/**
 * UserStatsProps defines the props type for the UserStats component.
 * @typedef UserStatProps
 * @property {number} totalUsers - The total number of users.
 * @property {number} activeUsers - The number of active users.
 * @property {number} usersWithLoans - The number of users with loans.
 * @property {number} usersWithSavings - The number of users with savings.
 */

/**
 * UserStats component displays statistics about users such as total users,
 * active users, users with loans, and users with savings.
 *
 * @param {UserStatProps} props - Props for UserStats component.
 * @returns The UserStats component displaying various user-related statistics.
 */
const UserStats: React.FC<UserStatProps> = ({ totalUsers, activeUsers, usersWithLoans, usersWithSavings }) => {
  return (
    <div className={styles.userStatsContainer}>
      <StatCard icon="/users.svg" label="USERS" stat={totalUsers} />
      <StatCard icon="/active-user.svg" label="ACTIVE USERS" stat={activeUsers} />
      <StatCard icon="/loan.svg" label="USERS WITH LOANS" stat={usersWithLoans} />
      <StatCard icon="/savings.svg" label="USERS WITH SAVINGS" stat={usersWithSavings} />
    </div>
  );
};

export default UserStats;
