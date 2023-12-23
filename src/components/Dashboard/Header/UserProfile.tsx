// components/UserProfile.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Header.module.scss';

/**
 * UserProfile component showing the user's profile image, username, and a dropdown icon.
 * @returns The UserProfile component.
 */
const UserProfile = () => (
  <div className={styles.userProfile}>
    <Image src="/profile-image.png" alt="User Profile" width={60} height={40}/>
    <span className={styles.userName}>
      Username
      <Image src="/dropdown.svg" alt="Dropdown" width={32} height={32} />
    </span>
  </div>
);

export default UserProfile;
