import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/FilterPanel.module.scss';
import useUserStore from "@/store/userStore";

import type { FilterState } from "@/utils/types/user";

/**
 * A component that renders a panel with various filter inputs to allow users
 * to filter search results based on criteria such as organization, username,
 * email, date, phone number, and status.
 *
 * @returns The `FilterPanel` component renders a form-like UI with input fields and buttons for filtering.
 */

  const FilterPanel: React.FC = () => {

    const initialState: FilterState = {
      organization: '',
      username: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    };

    const { filterCriteria, updateFilterCriteria } = useUserStore(state => state); // Ensure the typing of useUserStore is correct
    const [filter, setFilter] = useState<FilterState>(filterCriteria || initialState);

    const handleReset = () => {
      setFilter(initialState);
      updateFilterCriteria(initialState);
    };

    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateFilterCriteria(filter);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFilter(prev => ({
        ...prev,
        [name]: value
      }));
    };

  return (
    <form className={styles.filterPanel} onSubmit={handleFilter}>
      {/* Filter item for organization selection */}
      <div className={styles.filterItem}>
        <label htmlFor="organization">Organization</label>
        <select id="organization" name="organization" onChange={handleChange} value={filter.organization} className={styles.selectInput}>
          <option>Select</option>
          {/* Add other options here */}
        </select>
      </div>

      {/* Filter item for username input */}
      <div className={styles.filterItem}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="User" className={styles.textInput} value={filter.username} onChange={handleChange} />
      </div>

      {/* Filter item for email input */}
      <div className={styles.filterItem}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" name="email" onChange={handleChange} value={filter.email} className={styles.textInput} />
      </div>

      {/* Filter item for date selection */}
      <div className={styles.filterItem}>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" placeholder="Date" name="date" onChange={handleChange} value={filter.date} className={styles.textInput} />
      </div>

      {/* Filter item for phone number input */}
      <div className={styles.filterItem}>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Phone Number" name="phoneNumber" value={filter.phoneNumber} onChange={handleChange} className={styles.textInput} />
      </div>

      {/* Filter item for status selection */}
      <div className={styles.filterItem}>
        <label htmlFor="status">Status</label>
        <select id="status" className={styles.selectInput} value={filter.status} name="status" onChange={handleChange}>
          <option>Select</option>
          {/* Add other options here */}
        </select>
      </div>

      {/* Actions for resetting and applying filters */}
      <div className={styles.filterActions}>
        <button className={styles.resetBtn} type="button" onClick={handleReset}>Reset</button>
        <button className={styles.filterBtn} type="submit">Filter</button>
      </div>
    </form>
  );
};

export default FilterPanel;
