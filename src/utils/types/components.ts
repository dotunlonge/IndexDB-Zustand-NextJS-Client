import type { PersonalInfo, EducationEmploymentInfo, SocialsInfo, GuarantorInfo  } from "./user";
import React from "react";

/**
 * Represents an item in a menu.
 * @property {string} name - The display name of the menu item.
 * @property {string} icon - The icon for the menu item.
 * @property {string} path - The navigation path for the menu item.
 * @property {string} section - The section in which the menu item belongs.
 */
export interface MenuItem {
  name: string;
  icon: string;
  path: string;
  section: string;
};

/**
 * Props for a responsive table.
 */
export interface ResponsiveTableProps {
  // add props here
}

/**
 * Props for navigation component.
 * @property {boolean} isVisible - Whether the navigation is visible or not.
 */
export interface NavigationProps {
  isVisible: boolean;
};

/**
 * Props for hamburger menu component.
 * @property {boolean} isVisible - Whether the hamburger menu is visible or not.
 * @property {() => void} toggleMenu - Function to toggle the visibility of the menu.
 */
export interface HamburgerMenuProps {
  isVisible: boolean;
  toggleMenu: () => void;
};

/**
 * Props for a statistics card.
 * @property {string} icon - The icon for the stat card.
 * @property {string} label - The label for the stat card.
 * @property {number} stat - The statistic number to be displayed.
 */
export interface StatCardProps {
  icon: string;
  label: string;
  stat: number;
}

/**
 * Props for a user profile and tabs component.
 * @property {PersonalInfo} personalInfo - The personal information of the user.
 * @property {EducationEmploymentInfo} educationEmploymentInfo - The education and employment information of the user.
 * @property {string} activeTab - The currently active tab.
 * @property {(tabName: string) => void} onTabClick - Function to handle tab click events.
 */
export interface UserProfileAndTabsProps {
  personalInfo: PersonalInfo;
  educationEmploymentInfo: EducationEmploymentInfo;
  activeTab: string;
  onTabClick: (tabName: string) => void;
}

/**
 * Props for the general details section component.
 * @property {PersonalInfo} personalInfo - The personal information of the user.
 * @property {EducationEmploymentInfo} educationEmploymentInfo - The education and employment information of the user.
 * @property {SocialsInfo} socialsInfo - The social media information of the user.
 * @property {GuarantorInfo} guarantorInfo - The guarantor information of the user.
 */
export interface GeneralDetailsSectionProps {
  personalInfo: PersonalInfo;
  educationEmploymentInfo: EducationEmploymentInfo;
  socialsInfo: SocialsInfo;
  guarantorInfo: GuarantorInfo;
}

/**
 * Props for a select component.
 * @property {any[]} options - Array of options for the select component.
 * @property {string} [defaultValue] - The default value of the select component.
 * @property {(value: string) => void} onChange - Function to handle the change event.
 * @property {string} [id] - The ID of the select component.
 * @property {string} [name] - The name of the select component.
 */
export interface PageSizeSelectorProps {
  options: any[];
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  name?: string;
};

/**
 * Represents the properties for the RowMenu component.
 */
export interface RowMenuProps {
  userPath: string;
}


/**
 * Props for the ButtonWithModal component.
 * @typedef ButtonWithModalComponentProps
 * @property {string} btnClassName - The class of the button
 * @property {ReactNode} buttonContent - The button content
 * @property {ReactNode} modalContent - The modal content
 * @property {string} type - The class of the button
 */
export interface ButtonWithModalComponentProps {
  btnClassName?: string;
  buttonContent: React.ReactNode;
  modalContent: React.ReactNode;
  type: 'filter' | 'menu';
}
