// components/Dashboard/UserList/ResponsiveTable/index.tsx
import React, { useState, useMemo } from 'react';
import styles from '@/styles/components/UserList.module.scss';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import { orderBy } from 'lodash';
import { useRouter } from 'next/router';
import useUserStore from "@/store/userStore";

import type { ResponsiveTableProps } from "@/utils/types/components";
import type { User } from "@/utils/types/user";

import { formatDateString } from "@/utils/helpers/user";
import ButtonWithModal from "./ButtonWithModal";
import PageSizeSelector from "./PageSizeSelector";
import FilterPanel from "./FilterPanel";
import RowMenu from "./RowMenu";

/**
 * Component that renders a responsive table with sortable columns and pagination.
 * It allows users to view a paginated list of users, sort them by different fields,
 * and navigate through pages. The number of users per page can be adjusted, and the
 * selected page is maintained across component updates.
 *
 * Props for the ResponsiveTable component.
 * @typedef {Object} ResponsiveTableProps
 * @property {Array<User>} users - The list of user objects to display.
 * @property {boolean} isFetching - Indicates if the user data is being fetched.
 */
const ResponsiveTable: React.FC<ResponsiveTableProps> = () => {

  const { users, isFetching, searchQuery, filterCriteria } = useUserStore();
  const router = useRouter();

  const [sortedField, setSortedField] = useState<string | null>(null);
  const [ascending, setAscending] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);

  const sortedUsers = useMemo(() => {
    return sortedField ? orderBy(users, [sortedField], [ascending ? 'asc' : 'desc']) : users;
  }, [users, sortedField, ascending]);

  /**
 * Handles sorting of table data.
 * @param {string} field - The field to sort by.
 */
  const handleSort = (field: string) => {
    setAscending(field === sortedField ? !ascending : true);
    setSortedField(field);
  };

  /**
 * Handles the page click event in pagination.
 * @param {{ selected: number }} selectedItem - The selected item object containing the new page index.
 */
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  /**
   * Handles the change of 'users per page' selection.
   * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event on the select element.
   */
  const handleUsersPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUsersPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0); // Reset to first page
  };

  /**
   * Effect hook that resets the current page to the first page whenever
   * the search query changes. This ensures that the user starts from the
   * first page of results after a new search is made.
   */
  useMemo(() => {
    if (searchQuery || Object.values(filterCriteria).some(value => value)) {
      setCurrentPage(0);
    }
  }, [searchQuery, filterCriteria]);


  /**
   * Filters users based on the search query. This useMemo hook creates a
   * filtered list of users that match the search query based on username,
   * email, full name, and organization. It re-runs the filter operation
   * whenever the list of users or the search query changes.
   */
   const filteredUsers = useMemo(() => {
     const isFilterCriteriaEmpty = Object.values(filterCriteria).every(value => !value);

     return users?.filter(user => {
       // Check for matching search query
       const matchesSearchQuery = user.personalInfo.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  user.personalInfo.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  user.personalInfo.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  user.personalInfo.organization.toLowerCase().includes(searchQuery.toLowerCase());

       // Check for filter criteria, skip if filterCriteria is empty
       const matchesFilterCriteria = isFilterCriteriaEmpty || (
         (!Boolean(filterCriteria.username) || user.personalInfo.username.toLowerCase().includes(filterCriteria.username.toLowerCase())) &&
         (!Boolean(filterCriteria.email) || user.personalInfo.email.toLowerCase().includes(filterCriteria.email.toLowerCase())) &&
         (!Boolean(filterCriteria.status) || user.status.toLowerCase().includes(filterCriteria.status.toLowerCase())) &&
         (!Boolean(filterCriteria.organization) || user.personalInfo.organization.toLowerCase().includes(filterCriteria.organization.toLowerCase())) &&
         (!Boolean(filterCriteria.phoneNumber) || user.personalInfo.phoneNumber.toLowerCase().includes(filterCriteria.phoneNumber.toLowerCase()))
       );

       return matchesSearchQuery && matchesFilterCriteria;
     });
   }, [users, searchQuery, filterCriteria]);

  /**
   * Calculates the total number of pages required to display all users.
   * This is based on the total number of users and the number of users
   * displayed per page.
   */
  const pageCount = Math.ceil(filteredUsers?.length / usersPerPage);

  /**
   * Slices the filtered list of users to obtain only the subset of users
   * that should be displayed on the current page. This is calculated based
   * on the current page index and the number of users per page.
   */
  const paginatedUsers = filteredUsers?.slice(
    currentPage * usersPerPage,
    (currentPage + 1) * usersPerPage
  );

  /**
   * Generates a list of options for the number of users to display per page.
   * This useMemo hook creates an array of objects, each representing a
   * selectable option. The options are generated based on the total number
   * of users, increasing in increments of 10.
   */
  const selectOptions = useMemo(() => {
    const options = [];
    for (let i = 10; i <= filteredUsers.length; i += 10) {
      options.push({ value: `${i}`, label: `${i}` }); // create object for SelectListCount
    }
    return options; // returning array of objects
  }, [filteredUsers.length]);


  return (
    <>
    <div className={styles.tableResponsive} data-testid='responsive-table' id={'responsive-table'}>
      <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>

            <th>
            <span>
            ORGANIZATION
            <ButtonWithModal
              buttonContent={<Image src="/filter.svg" alt="filter" height={20} width={20} />}
              modalContent={<FilterPanel/>}
              type="filter"
            />
            </span>
            </th>

            <th>
            <span>
            USERNAME
            <ButtonWithModal
              buttonContent={<Image src="/filter.svg" alt="filter" height={20} width={20} />}
              modalContent={<FilterPanel/>}
              type="filter"
            />
            </span>
            </th>

            <th>
            <span>
            EMAIL
            <ButtonWithModal
              buttonContent={<Image src="/filter.svg" alt="filter" height={20} width={20} />}
              modalContent={<FilterPanel/>}
              type="filter"
            />
            </span>
            </th>

            <th>
            <span>
            PHONE NUMBER
            <ButtonWithModal
              buttonContent={<Image src="/filter.svg" alt="filter" height={20} width={20} />}
              modalContent={<FilterPanel/>}
              type="filter"
            />
            </span>
            </th>

            <th>
            <span>
            DATE JOINED
            <ButtonWithModal
              buttonContent={<Image src="/filter.svg" alt="filter" height={20} width={20} />}
              modalContent={<FilterPanel/>}
              type="filter"
            />
            </span>
            </th>

            <th>
            <span>
            STATUS
            <ButtonWithModal
              buttonContent={<Image src="/filter.svg" alt="filter" height={20} width={20} />}
              modalContent={<FilterPanel/>}
              type="filter"
            />
            </span>
            </th>

            <th></th>
          </tr>
        </thead>
        <tbody>
        {!isFetching && filteredUsers.length === 0 && <tr><td>No users available</td></tr>}
        {(isFetching && filteredUsers.length) === 0 ? <tr><td id={styles.loading}>Loading...</td></tr> : paginatedUsers.map((user, index) => {

            const userPath = `/dashboard/users/${user.personalInfo.username}`;

            return <tr key={index} onClick={(() => router.push(userPath))}>
              <td data-label="Organization">{user.personalInfo.organization}</td>
              <td data-label="Username">{user.personalInfo.username}</td>
              <td data-label="Email">{user.personalInfo.email}</td>
              <td data-label="PhoneNumber">{user.personalInfo.phoneNumber}</td>
              <td data-label="DateJoined">{formatDateString(user.dateJoined)}</td>
              <td data-label="Status" className={styles[user.status.toLowerCase()]}><p className={styles.box}>{user.status}</p></td>
              <td data-label="Options">
              <ButtonWithModal
                btnClassName={styles.filter}
                buttonContent={<Image src="/option-menu.svg" alt="options" height={25} width={25} />}
                modalContent={<RowMenu userPath={userPath} />}
                type="menu"
              />
              </td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
    </div>

    {(!isFetching || filteredUsers.length > 0) && (
      <div className={styles.pagination} data-testid="pagination">
       <div className={styles.showing}>

         <div className={styles.showingHowMany}>
         <span>Showing</span>
         <PageSizeSelector
         id={"showingHowMany"}
         name={"showingHowMany"}
         data-testid="showingHowMany"
         options={selectOptions}
         defaultValue={usersPerPage.toString()}
         onChange={handleUsersPerPageChange}
        />
         <span>out of {filteredUsers.length}</span>
         </div>

         <ReactPaginate
           previousLabel={<Image src={"/prev-btn.svg"} alt={"prev-btn"} height={40} width={40} />}
           nextLabel={<Image src={"/next-btn.svg"} alt={"next-btn"} height={40} width={40} />}
           breakLabel={'...'}
           breakClassName={'break-me'}
           pageCount={pageCount}
           marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={handlePageClick}
           containerClassName={styles.pagination}
           activeClassName={styles.activePage}
           forcePage={pageCount > 0 ? currentPage : 0} // Ensure forcePage is valid
         />

        </div>
      </div>
      )}
    </>
  );
};

export default ResponsiveTable;
