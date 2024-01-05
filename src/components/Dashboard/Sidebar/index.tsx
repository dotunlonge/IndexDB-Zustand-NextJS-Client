// components/Dashboard/Sidebar/index.tsx
import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Sidebar.module.scss';
import { useRouter } from 'next/router';

import MenuItemComponent from "./MenuItemComponent";
import type { MenuItem } from "@/utils/types/components";

/**
 * The Sidebar component renders the navigation menu for the dashboard.
 * It is designed to match the provided design exactly, with sections for
 * customers, businesses, and settings.
 * @returns The sidebar component with navigation links.
 */
const Sidebar: React.FC = () => {

  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>('');

  const disableSidebarNavigation = true;
  const disabledPath = '#';

  useEffect(() => {
    setActiveItem(router.pathname);
  }, [router.pathname]);

  // This useMemo hook ensures that groupedItems is only recalculated when menuItems changes.
  const groupedItems = useMemo(() => {
      const menuItems: MenuItem[] = [
        // Customers - Sub-category
        { name: 'Users', icon: '/icons/users.svg', path: '/dashboard/users', section: 'customers' },
        { name: 'Guarantors', icon: '/icons/guarantors.svg', path:  disableSidebarNavigation ? disabledPath : '/dashboard/guarantors', section: 'customers' },
        { name: 'Loans', icon: '/icons/loans.svg', path:  disableSidebarNavigation ? disabledPath : '/dashboard/loans', section: 'customers' },
        { name: 'Decision Models', icon: '/icons/decision-models.svg', path:  disableSidebarNavigation ? disabledPath : '/dashboard/decision-models', section: 'customers' },
        { name: 'Savings', icon: '/icons/savings.svg', path:  disableSidebarNavigation ? disabledPath : '/dashboard/savings', section: 'customers' },
        { name: 'Loan Requests', icon: '/icons/loan-products.svg', path:  disableSidebarNavigation ? disabledPath : '/dashboard/loan-requests', section: 'customers' },
        { name: 'Whitelist', icon: '/icons/whitelist.svg', path:  disableSidebarNavigation ? disabledPath : '/dashboard/whitelist', section: 'customers' },
        { name: 'Karma', icon: '/icons/karma.svg', path:  disableSidebarNavigation ? disabledPath : '/dashboard/karma', section: 'customers' },

        // Businesses - Sub-category
        { name: 'Organization', icon: '/icons/organization.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/organization', section: 'businesses' },
        { name: 'Loan Products', icon: '/icons/loan-products.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/loan-products', section: 'businesses' },
        { name: 'Savings Products', icon: '/icons/savings-products.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/savings-products', section: 'businesses' },
        { name: 'Fees and Pricing', icon: '/icons/fees-pricing.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/fees-pricing', section: 'businesses' },
        { name: 'Transactions', icon: '/icons/transactions.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/transactions', section: 'businesses' },
        { name: 'Services', icon: '/icons/services.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/services', section: 'businesses' },
        { name: 'Service Account', icon: '/icons/service-account.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/service-account', section: 'businesses' },
        { name: 'Settlements', icon: '/icons/settlements.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/settlements', section: 'businesses' },
        { name: 'Reports', icon: '/icons/reports.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/reports', section: 'businesses' },

        // Settings - Sub-category
        { name: 'Preferences', icon: '/icons/preferences.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/preferences', section: 'settings' },
        { name: 'Fees and Pricing', icon: '/icons/fees-pricing.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/fees-and-pricing', section: 'settings' },
        { name: 'Audit Logs', icon: '/icons/audit-logs.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/audit-logs', section: 'settings' },
        { name: 'System Messages', icon: '/icons/system-messages.svg', path:  disableSidebarNavigation ? disabledPath :'/dashboard/system-messages', section: 'settings' },
      ];

      return menuItems.reduce((acc, item) => {
     acc[item.section] = acc[item.section] || [];
     acc[item.section].push(item);
     return acc;
   }, {} as { [key: string]: MenuItem[] });
 }, []);

  // Function to handle click on menu items
  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <aside className={styles.sidebar}>

      <div>
        <ul className={styles.topList}>

          <li id={styles.selectOrg}>
            <Image className={styles.bigOnMobile} src={'/icons/briefcase.svg'} alt={"Switch Organization"} width={16} height={16} />
            <select className={styles.customSelect}>
              <option value="">Switch Organization</option>
            </select>
            <Image src={'/icons/down.svg'} alt={"Switch Organization"} width={16} height={16} />
          </li>

          <li className={activeItem === "Dashboard" ? styles.active : ''}>
            <Link href={disableSidebarNavigation ? disabledPath : "/dashboard"} className={styles.sidebarMenuOption}>
              <Image src={'/icons/home.svg'} alt={"Dashboard"} width={16} height={16} />
              <span className={styles.menuItemText}>Dashboard</span>
            </Link>
          </li>

        </ul>
      </div>

      {Object.entries(groupedItems).map(([section, items]) => (
        <div key={section}>
          <h4 className={styles.sectionTitle}>{section.toUpperCase()}</h4>
          <ul className={styles.menuList}>
            {items.map(item => (
              <MenuItemComponent
                key={item.name}
                item={item}
                isActive={activeItem.includes(item.path)}
                onClick={() => handleItemClick(item.name)}
              />
            ))}
          </ul>
        </div>
      ))}

      <div className={styles.logOut}>
        <ul className={styles.menuList}>
        <li>
          <Link href={"/"} className={styles.sidebarMenuOption}>
            <Image src={'/icons/sign-out.svg'} alt={"Logout"} width={16} height={16} />
            <span className={styles.menuItemText}>Logout</span>
          </Link>

        </li>
        </ul>
            <span id={styles.version}>v1.2.0</span>
      </div>

    </aside>
  );

};

export default Sidebar;
