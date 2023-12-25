// components/Dashboard/UserStats/StatCard.tsx

import React from 'react';
import styles from '@/styles/components/UserStats.module.scss';
import Image from 'next/image';

import type { StatCardProps } from "@/utils/types/components";

/**
 * StatCard component for displaying an individual statistic.
 *
 * @param {object} props - Props for StatCard component.
 * @param {string} props.icon - Icon URL for the statistic.
 * @param {string} props.label - Label for the statistic.
 * @param {number} props.stat - The statistic number to display.
 * @returns The StatCard component.
 */
const StatCard: React.FC<StatCardProps> = ({ icon, label, stat }) => {
    return (
      <div className={styles.userStatCard}>
        <Image src={icon} width={40} height={40} className={styles.icon} alt={icon} />
        <label>{label}</label>
        <p>{Boolean(stat) ? stat.toLocaleString() : 0}</p>
      </div>
    );
};

export default StatCard;
