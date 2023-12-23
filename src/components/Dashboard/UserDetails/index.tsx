import React, { useState } from 'react';
import styles from '@/styles/components/UserDetails.module.scss';
import type { User, UserDetailsProps } from "@/utils/types/user";
import Head from 'next/head';

import GeneralDetailsSection from "./GeneralDetailsSection";
import UserProfileAndTabs from "./UserProfileAndTabs";

/**
 * UserDetails component displays detailed information about a user.
 * It includes sections for general details, personal information, education,
 * employment, socials, and guarantor information.
 *
 * @param {UserDetailsProps} props - Props for UserDetails component.
 * @returns The UserDetails component.
 */
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {

  const tabs = {
    generalDetails: 'General Details',
    documents: 'Documents',
    bankDetails: 'Bank Details',
    loans: 'Loans',
    Savings: 'Savings',
    appAndSystem: 'App and System'
  }

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(tabs.generalDetails);

  // Function to change the active tab
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  // Checks if user data is available
  if (!user) {
    return <div>No user data available</div>;
  }

  // Destructure the user object for easier access
  const {
    personalInfo,
    educationEmploymentInfo,
    socialsInfo,
    guarantorInfo
  } = user;

  return (
    <div className={styles.userDetails}>

      <Head>
       <title>{personalInfo.username} | User Details - Lendsqr</title>
       <meta name="description" content="View detailed information about users including personal, educational, and employment details." />
       <meta name="keywords" content="user details, personal info, education, employment, user profile" />
       {/* Additional SEO tags as needed */}
     </Head>


      {/* Profile and Tabs Section */}
      <UserProfileAndTabs
        personalInfo={personalInfo}
        educationEmploymentInfo={educationEmploymentInfo}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />

      {/* Dynamic Section Based on Active Tab */}
      {activeTab === tabs.generalDetails && (
        <GeneralDetailsSection
          personalInfo={personalInfo}
          educationEmploymentInfo={educationEmploymentInfo}
          socialsInfo={socialsInfo}
          guarantorInfo={guarantorInfo}
        />
      )}
    </div>
  );
};

export default UserDetails;
