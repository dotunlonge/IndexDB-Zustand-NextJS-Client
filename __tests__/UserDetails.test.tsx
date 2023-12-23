import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetails from '@/components/Dashboard/UserDetails';
import type { User } from "@/utils/types/user";
import mockUsers from "@/utils/tests/mockUsers";

describe('UserDetails', () => {

  const mockUser = mockUsers[0];

  // Positive Scenario: Component renders with valid user data
    it('renders with user data', () => {
      render(<UserDetails user={mockUser} />);
      expect(screen.getByText('General Details')).toBeInTheDocument();
      // ... additional assertions for expected content
    });

    // Negative Scenario: Component renders with no user data
    it('displays no user data message when user prop is not provided', () => {
      render(<UserDetails user={undefined} />);
      expect(screen.getByText('No user data available')).toBeInTheDocument();
    });

    // Positive Scenario: Content changes when tabs are clicked
    it('displays content for each tab when clicked', () => {
      render(<UserDetails user={mockUser} />);

      // Simulate clicking the 'Documents' tab
      fireEvent.click(screen.getByText('Documents'));
      expect(screen.getByText('Documents')).toBeInTheDocument(); // Replace with actual expected content

      // Simulate clicking the 'Bank Details' tab
      fireEvent.click(screen.getByText('Bank Details'));
      expect(screen.getByText('Bank Details')).toBeInTheDocument(); // Replace with actual expected content

      // ... continue for each tab
    });

});
