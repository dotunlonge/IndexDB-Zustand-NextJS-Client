import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserStats from '@/components/Dashboard/UserStats'; // Adjust the import path as necessary

describe('UserStats', () => {
  // Positive Scenarios
  it('renders the statistics with correct values', async () => {

    const mockProps = {
      totalUsers: 1000,
      activeUsers: 750,
      usersWithLoans: 250,
      usersWithSavings: 500,
    };

    const { getByText } = render(<UserStats activeUsers={mockProps.activeUsers} totalUsers={mockProps.totalUsers} totalUsers={mockProps.totalUsers} usersWithLoans={mockProps.usersWithLoans} usersWithSavings={mockProps.usersWithSavings} />);

    // Wait for the navigation to the dashboard
    await waitFor(() => {
      expect(getByText('USERS')).toBeInTheDocument();
      expect(getByText('ACTIVE USERS')).toBeInTheDocument();
      expect(getByText('USERS WITH LOANS')).toBeInTheDocument();
      expect(getByText('USERS WITH SAVINGS')).toBeInTheDocument();
      expect(getByText('1,000')).toBeInTheDocument();
      expect(getByText('750')).toBeInTheDocument();
      expect(getByText('250')).toBeInTheDocument();
      expect(getByText('500')).toBeInTheDocument();
    });

  });

  // More positive tests can include:
  // - Checking for the presence of icons
  // - Verifying that the StatCard component is called with the right props

  // Negative Scenarios
  it('does not break when passed undefined statistics', async () => {

    const mockProps = {
      totalUsers: undefined,
      activeUsers: undefined,
      usersWithLoans: undefined,
      usersWithSavings: undefined,
    };

    const { container } = render(<UserStats activeUsers={mockProps.activeUsers} totalUsers={mockProps.totalUsers} totalUsers={mockProps.activeUsers}   usersWithLoans={mockProps.usersWithLoans} usersWithSavings={mockProps.usersWithSavings} />);

    // Wait for the navigation to the dashboard
    await waitFor(() => {
      const userStatsContainer = container.querySelector('.userStatsContainer');
       expect(userStatsContainer).not.toBeNull();
       expect(userStatsContainer).toBeInstanceOf(HTMLElement);
       expect(userStatsContainer).toHaveClass('userStatsContainer');
    });

  });

});
