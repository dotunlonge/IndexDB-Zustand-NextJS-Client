// components/Logo.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/Header.module.scss';

/**
 * Logo component that displays the application's logo.
 * Clicking on the logo navigates the user to the dashboard.
 *
 * This component uses Next.js's Image component for optimized image loading.
 * The 'priority' attribute in the Image component is used to prioritize loading of above-the-fold images.
 */
const Logo: React.FC = () => (
  <div className={styles.logoContainer}>
    <Link href="/dashboard/users">
      <Image src="/logo.svg" alt="Dashboard Logo" className={styles.logo} width={144.804} height={30} priority />
    </Link>
  </div>
);

export default Logo;
