import React, { useState } from 'react';
import styles from '@/styles/components/UserDetails.module.scss';
import type { GeneralDetailsSectionProps } from "@/utils/types/components";

/**
 * Renders the General Details section based on the active tab.
 * @param {object} props - Props for the component.
 * @returns The general details section component.
 */
const GeneralDetailsSection: React.FC<GeneralDetailsSectionProps> = ({ personalInfo, educationEmploymentInfo, socialsInfo, guarantorInfo }) => {
  // JSX for rendering general details
  return (  <section className="tab" data-testid="general-details">

    <section className={styles.personalInfo}>
      <h3 className={styles.sectionTitle}>Personal Information</h3>
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Full Name</span>
          <span className={styles.infoValue}>{personalInfo.fullName}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Phone Number</span>
          <span className={styles.infoValue}>{personalInfo.phoneNumber}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Email Address</span>
          <span className={styles.infoValue}>{personalInfo.email}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>BVN</span>
          <span className={styles.infoValue}>{personalInfo.bvn}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Gender</span>
          <span className={styles.infoValue}>{personalInfo.gender}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Marital Status</span>
          <span className={styles.infoValue}>{personalInfo.maritalStatus}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Children</span>
          <span className={styles.infoValue}>{personalInfo.children}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Type Of Residence</span>
          <span className={styles.infoValue}>{personalInfo.typeOfResidence}</span>
        </div>

      </div>
    </section>

    <br/><br/>

    <section className={styles.educationEmployment}>
      <h3 className={styles.sectionTitle}>Education and Employment</h3>

      <div className={styles.infoGrid}>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Level of Education</span>
          <span className={styles.infoValue}>{educationEmploymentInfo.levelOfEducation}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Employment Status</span>
          <span className={styles.infoValue}>{educationEmploymentInfo.employmentStatus}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Sector Of Employment</span>
          <span className={styles.infoValue}>{educationEmploymentInfo.sectorOfEmployment}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Duration Of Employment</span>
          <span className={styles.infoValue}>{educationEmploymentInfo.durationOfEmployment}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Level of Education</span>
          <span className={styles.infoValue}>{educationEmploymentInfo.levelOfEducation}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Office Email</span>
          <span className={styles.infoValue}>{educationEmploymentInfo.officeEmail}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Monthly Income</span>
          <span className={styles.infoValue}>{educationEmploymentInfo.monthlyIncome}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Loan Repayment</span>
          <span className={styles.infoValue}>{educationEmploymentInfo.loanRepayment}</span>
        </div>

      </div>
    </section>

    <br/><br/>

    <section className={styles.socials}>
      <h3 className={styles.sectionTitle}>Socials</h3>
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Twitter</span>
          <span className={styles.infoValue}>{socialsInfo.twitter}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Facebook</span>
          <span className={styles.infoValue}>{socialsInfo.facebook}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Instagram</span>
          <span className={styles.infoValue}>{socialsInfo.instagram}</span>
        </div>

      </div>
    </section>

    <br/><br/>

    <section className={styles.guarantorInfo}>
      <h3 className={styles.sectionTitle}>Guarantor</h3>
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Full Name</span>
          <span className={styles.infoValue}>{guarantorInfo.fullName}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>PHONE NUMBER</span>
          <span className={styles.infoValue}>{guarantorInfo.phoneNumber}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Email Address</span>
          <span className={styles.infoValue}>{guarantorInfo.email}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Relationship</span>
          <span className={styles.infoValue}>{guarantorInfo.relationship}</span>
        </div>
      </div>
    </section>

    </section>);
};

export default GeneralDetailsSection;
