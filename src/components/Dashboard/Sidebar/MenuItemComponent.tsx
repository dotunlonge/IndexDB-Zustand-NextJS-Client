import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Sidebar.module.scss';
import { useRouter } from 'next/router';
import type { MenuItem } from "@/utils/types/components";

/**
 * Renders an individual menu item in the sidebar.
 *
 * @param {object} props - The props for the component.
 * @param {MenuItem} props.item - The menu item data.
 * @param {boolean} props.isActive - Indicates if the menu item is currently active.
 * @param {Function} props.onClick - Function to call when the menu item is clicked.
 * @returns The menu item component.
 */
const MenuItemComponent: React.FC<{ item: MenuItem; isActive: boolean; onClick: () => void }> = ({
  item,
  isActive,
  onClick,
}) => (
  <li
    className={isActive ? styles.active : ''}
    onClick={onClick}
  >
    <Link href={item.path} className={styles.sidebarMenuOption}>
        <Image src={item.icon} alt={item.name} width={16} height={16} />
        <span className={styles.menuItemText}>{item.name}</span>
    </Link>
  </li>
);

export default MenuItemComponent;
