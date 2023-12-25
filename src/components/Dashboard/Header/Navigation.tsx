// components/Dashboard/Header/Navigation.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Header.module.scss';

import SearchBar from "./SearchBar";
import UserControls from "./UserControls";

import type { NavigationProps } from "@/utils/types/components";

/**
 * Navigation component that displays the main navigation menu of the application.
 * It includes a search bar, documentation link, notifications, and user profile information.
 * The visibility of the Navigation component can be controlled via the `isVisible` prop.
 *
 * @param {NavigationProps} props - Props for the Navigation component.
 * @param {boolean} props.isVisible - Determines whether the Navigation component is visible.
 * @returns The Navigation component with search and user control elements.
 */
const Navigation: React.FC<NavigationProps> = ({ isVisible }) => (
  <div className={`${styles.elementsContainer} ${isVisible ? styles.show : ''}`}>
    <nav className={styles.navigation}>
      <SearchBar />
    </nav>
    <UserControls />
  </div>
);

export default Navigation;
