import React, { useState } from 'react';
import styles from '@/styles/components/UserDetails.module.scss';
import type { UserProfileAndTabsProps } from "@/utils/types/components";
import Image from 'next/image';

/**
 * Renders the user's profile information and tabs for different details sections.
 * @param {object} props - Props for the component.
 * @returns The profile and tabs section component.
 */
const UserProfileAndTabs: React.FC<UserProfileAndTabsProps> = ({ personalInfo, educationEmploymentInfo, activeTab, onTabClick }) => {
  // JSX for rendering user profile and tabs
  return (
    <section className={styles.generalDetails}>
      <div className={styles.profile}>

        <div className={styles.profileInfo}>

          <div className={styles.profileImage}>
            <Image src="/user-profile.svg" height={200} width={200} alt="Profile" className={styles.profileImage} />
          </div>

          <div>
            <h2 className={styles.profileName}>{personalInfo.fullName}</h2>
            <span className={styles.profileInfoText}>{personalInfo.username}</span>
          </div>

        </div>

        <div className={styles.profileTier}>
          <h2 className={styles.tierTitle}>{`User's Tier`}</h2>
          <span className={styles.rating}>
            <Image src="/stars/filled.svg" height={20} width={20} alt="stars" />
            <Image src="/stars/outline.svg" height={20} width={20} alt="stars" />
            <Image src="/stars/outline.svg" height={20} width={20} alt="stars"/>
          </span>
        </div>

        <div className={styles.balance}>
          <h2 className={styles.balanceAmount}>{educationEmploymentInfo.loanRepayment}</h2>
          <span className={styles.balanceBank}>9912345678/Providus Bank</span>
        </div>

      </div>
      <div className={styles.detailsTabs}>
           {['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'].map(tab => (
             <button
               key={tab}
               className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
               onClick={() => onTabClick(tab)}
             >
               {tab}
             </button>
           ))}
         </div>
    </section>
  );
};

export default UserProfileAndTabs;
