// components/Dashboard/Header/SearchBar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Header.module.scss';
import useUserStore from "@/store/userStore";

/**
 * SearchBar component for the Navigation.
 * Includes an input field for search functionality and a button with a search icon.
 * @returns The SearchBar component.
 */
const SearchBar: React.FC = () => {

  const {  searchQuery, updateSearchQuery } = useUserStore();

   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => updateSearchQuery(e.target.value);

  return (
    <div className={styles.searchBar}>
      <input name="search" value={searchQuery} type="search" className={styles.search} placeholder="Search for anything" onChange={handleSearch} />
      <button className={styles.searchBtn}>
        <Image src="/search.svg" width={20} height={20} alt="search"/>
      </button>
    </div>
  );
};

export default SearchBar;
