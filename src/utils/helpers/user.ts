import type { User } from "@/utils/types/user";


/**
 * Calculate user statistics from an array of users.
 *
 * @param {Array} users - Array of user objects.
 * @returns {Object} An object containing various user statistics.
 */
export const calculateUserStatistics = (users: User[]) => {
  let activeCount = 0;
  let loanCount = 0;
  let savingsCount = 0;

  users.forEach(user => {
    if (user.status === "Active") {
      activeCount++;
    }
    if (parseFloat(user.educationEmploymentInfo.loanRepayment.replace(/₦/g, '')) > 0) {
      loanCount++;
    }
    if (parseFloat(user.educationEmploymentInfo.monthlyIncome.replace(/₦/g, '')) > 0) {
      savingsCount++;
    }
  });

  return {
    totalUsers: users.length,
    activeUsers: activeCount,
    usersWithLoans: loanCount,
    usersWithSavings: savingsCount,
  };
};

/**
 * Formats Date
 *
 * @param {string} inputDate - input date
 * @returns {Date} A formatted date value
 */
export function formatDateString(inputDate: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    const date = new Date(inputDate);
    return new Intl.DateTimeFormat('en-US', options).format(date);
};
