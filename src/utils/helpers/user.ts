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
