// components/Dashboard/UserList/ResponsiveTable/RowMenu.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/RowMenu.module.scss';

import type { RowMenuProps } from "@/utils/types/components";

/**
 * Renders a menu with options related to user actions such as viewing details,
 * blacklisting, or activating a user. Each menu item is represented by an icon
 * and a text label.
 *
 * @param {RowMenuProps} {
 *   userPath - The URL path to the user's detail page.
 * }
 * @returns A styled list of menu options.
 */
 /**
  * Renders a menu with options related to user actions such as viewing details,
  * blacklisting, or activating a user. Each menu item is represented by an icon
  * and a text label.
  *
  * @param {RowMenuProps} {
  *   userPath - The URL path to the user's detail page.
  * }
  * @returns A styled list of menu options.
  */
 const RowMenu: React.FC<RowMenuProps> = ({ userPath }) => {
   return (
    <div className={styles.rowMenu}>
      <ul>
        <li>
          <Link href={userPath}>
            <Image src="/row-menu/eye.svg" alt="View" width={20} height={20} />
            <span>View Details</span>
          </Link>
        </li>

        <li>
          <Link href="#">
            <Image src="/row-menu/blacklist-user.svg" alt="Blacklist User" width={20} height={20} />
            <span>Blacklist User</span>
          </Link>
        </li>

        <li>
          <Link href="#">
            <Image src="/row-menu/activate-user.svg" alt="Activate User" width={20} height={20} />
            <span>Activate User</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RowMenu;
