// components/Dashboard/Header/UserControls.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Header.module.scss';
import UserProfile from "./UserProfile";

/**
 * UserControls component that includes links to documentation, notifications, and user profile.
 * @returns The UserControls component.
 */
const UserControls = () => (
  <div className={styles.userControls}>
    <Link href="/docs">Docs</Link>
    <button>
      <Image src="/notifications.svg" alt="Notifications" width={32} height={32} />
    </button>
    <UserProfile />
  </div>
);

export default UserControls;
