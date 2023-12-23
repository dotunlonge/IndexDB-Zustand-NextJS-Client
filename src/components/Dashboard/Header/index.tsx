// components/Header.tsx
import React, { useState } from 'react';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import Navigation from './Navigation';
import styles from '@/styles/components/Header.module.scss';

/**
 * The Header component serves as the top navigation bar of the application.
 * It includes the logo, a hamburger menu, and navigation links.
 * The hamburger menu and navigation links are visible based on the state `isMenuVisible`.
 *
 * @returns The Header component.
 */
const Header: React.FC = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  /**
   * Toggles the visibility of the hamburger menu and navigation links.
   */
  const toggleMenu = () => setMenuVisibility(!isMenuVisible);

  return (
    <header className={styles.header} aria-label="Main Header">
      <Logo />
      {<HamburgerMenu isVisible={isMenuVisible} toggleMenu={toggleMenu} />}
      {<Navigation isVisible={isMenuVisible} />}
    </header>
  );
};

export default Header;
