// components/HamburgerMenu.tsx
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/Header.module.scss';

import type { HamburgerMenuProps } from "@/utils/types/components";

/**
 * HamburgerMenu component for toggling the visibility of a navigation menu.
 * This component displays a hamburger icon when the menu is not visible,
 * and a close icon when the menu is open.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isVisible - Flag indicating whether the menu is currently visible.
 * @param {() => void} props.toggleMenu - Function to toggle the visibility of the menu.
 */
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isVisible, toggleMenu }) => (
  <button
    className={styles.hamburger}
    onClick={toggleMenu}
    aria-label={isVisible ? 'Close menu' : 'Open menu'}
    aria-expanded={isVisible}
  >
    <Image src={isVisible ? "/close.svg" : "/hamburger.svg"} alt="" className={styles.menuIcon} width={40} height={40} />
  </button>
);

export default HamburgerMenu;
