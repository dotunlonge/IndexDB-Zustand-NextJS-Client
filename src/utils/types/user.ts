/**
 * Represents personal information of a user.
 * @property {string} fullName - The full name of the user.
 * @property {string} phoneNumber - The phone number of the user.
 * @property {string} email - The email address of the user.
 * @property {string} bvn - The Bank Verification Number of the user.
 * @property {string} gender - The gender of the user.
 * @property {string} maritalStatus - The marital status of the user.
 * @property {string} children - Information about the user's children.
 * @property {string} typeOfResidence - The type of residence of the user.
 * @property {string} organization - The organization the user is affiliated with.
 * @property {string} username - The username of the user.
 */
 export interface PersonalInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
  organization: string;
  username: string;
};

/**
 * Contains information about the user's education and employment.
 * @property {string} levelOfEducation - The level of education of the user.
 * @property {string} employmentStatus - The employment status of the user.
 * @property {string} sectorOfEmployment - The sector of employment of the user.
 * @property {string} durationOfEmployment - The duration of employment.
 * @property {string} officeEmail - The office email of the user.
 * @property {string} monthlyIncome - The monthly income of the user.
 * @property {string} loanRepayment - Information about loan repayment.
 */
export interface EducationEmploymentInfo {
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
};

/**
 * Represents social media information of a user.
 * @property {string} twitter - The Twitter handle of the user.
 * @property {string} facebook - The Facebook profile of the user.
 * @property {string} instagram - The Instagram handle of the user.
 */
export interface SocialsInfo {
  twitter: string;
  facebook: string;
  instagram: string;
};

/**
 * Contains information about a user's guarantor.
 * @property {string} fullName - The full name of the guarantor.
 * @property {string} phoneNumber - The phone number of the guarantor.
 * @property {string} email - The email address of the guarantor.
 * @property {string} relationship - The relationship of the guarantor to the user.
 */
export interface GuarantorInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
};

/**
 * Represents user statistics.
 * @property {number} totalUsers - Total number of users.
 * @property {number} activeUsers - Number of active users.
 * @property {number} usersWithLoans - Number of users with loans.
 * @property {number} usersWithSavings - Number of users with savings.
 */
export interface UserStatProps {
  totalUsers: number;
  activeUsers: number;
  usersWithLoans: number;
  usersWithSavings: number;
}

/**
 * Represents a user with various personal and related information.
 * @property {PersonalInfo} personalInfo - Personal details of the user.
 * @property {EducationEmploymentInfo} educationEmploymentInfo - Education and employment details.
 * @property {SocialsInfo} socialsInfo - Social media details.
 * @property {GuarantorInfo} guarantorInfo - Guarantor details.
 * @property {string} dateJoined - Date the user joined.
 * @property {string} status - Current status of the user.
 */
 export interface User {
  personalInfo: PersonalInfo;
  educationEmploymentInfo: EducationEmploymentInfo;
  socialsInfo: SocialsInfo;
  guarantorInfo: GuarantorInfo;
  dateJoined: string;
  status: string;
};

/**
 * Represents the state and actions of a user store.
 * @property {User[]} users - Array of user objects.
 * @property {() => Promise<void>} fetchUsers - Function to fetch users.
 * @property {() => Promise<void>} clearSelected - Function to clear selected users.
 * @property {() => Promise<void>} initialize - Function to initialize the store.
 * @property {(id: any) => Promise<void>} fetchUserDetails - Function to fetch details of a specific user.
 * @property {(criteria: any) => Promise<void>} updateFilterCriteria - Function to update filter criteria.
 * @property {(searchQuery: any) => Promise<void>} updateSearchQuery - Function to set search query value.
 * @property {(id: any) => Promise<void>} fetchUserDetails - Function to fetch details of a specific user.
 * @property {Boolean} isFetching - Indicates if fetching is ongoing.
 * @property {any} selectedUser - Currently selected user.
 */
 export interface UserStore {
  users: User[];
  fetchUsers: () => Promise<void>;
  clearSelected: () => Promise<void>;
  fetchUserDetails: (id: any) => Promise<void>;
  updateSearchQuery: (searchQuery: string) => Promise<void>;
  updateFilterCriteria: (criteria: any) => Promise<void>;
  isFetching: Boolean;
  selectedUser: any;
  searchQuery: string;
  filterCriteria: any;
};

/**
 * Props for the UserDetails component.
 * @typedef UserDetailsProps
 * @property {User} user - The user data to be displayed.
 */
export interface UserDetailsProps {
  user: User;
}

/**
 * Represents personal information of a user.
 * @property {string} status - The status of the user.
 * @property {string} phoneNumber - The phone number of the user.
 * @property {string} email - The email address of the user.
 * @property {string} date - The date of the user.
 * @property {string} organization - The organization the user is affiliated with.
 * @property {string} username - The username of the user.
 */
export type FilterState = {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
};
