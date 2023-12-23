/**
 * @fileoverview Test suite for the LoginForm component.
 *
 * Tests include navigation on valid login, password visibility toggle, and navigation prevention on invalid input.
 * Utilizes @testing-library/react for rendering and simulating user interactions with the LoginForm component.
 */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '@/components/LoginPage/LoginForm';

// Mock the next/router useRouter function
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('LoginForm', () => {
  /**
   * Test navigation to the dashboard on a valid login.
   * Simulates user input of valid email and password and verifies if navigation occurs.
   */
  it('should navigate to the dashboard on valid login', async () => {
    // Mock the useRouter hook to provide a push function
    const mockPush = jest.fn();
    const mockUseRouter = { push: mockPush };
    jest.spyOn(require('next/router'), 'useRouter').mockReturnValue(mockUseRouter);

    // Render the LoginForm component
    const { getByPlaceholderText, getByRole } = render(<LoginForm />);

    // Simulate user input: valid email and password
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'user@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });

    // Trigger the login button click
    fireEvent.click(getByRole('button', { name: 'LOG IN' }));

    // Wait for the navigation to the dashboard
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard/users');
    });
  });

  /**
   * Test toggling the password visibility.
   * Verifies that the password field type changes from 'password' to 'text' and vice versa on toggle button click.
   */
  it('should toggle password visibility', () => {
    // Render the LoginForm component
    const { getByPlaceholderText, getByTestId } = render(<LoginForm />);

    // Retrieve the password input and toggle button elements
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
    const toggleButton = getByTestId('password-toggle-button');

    // Initially, the password field should be of type "password"
    expect(passwordInput.type).toBe('password');

    // Click the toggle button to show password
    fireEvent.click(toggleButton);

    // After clicking, the password field should be of type "text"
    expect(passwordInput.type).toBe('text');
  });

  /**
   * Test to ensure that navigation does not occur on invalid input.
   * Simulates user input of an invalid email and verifies that the navigation is not triggered.
   */
  it('should not navigate on invalid input', async () => {
    const mockPush = jest.fn();
    jest.spyOn(require('next/router'), 'useRouter').mockReturnValue({ push: mockPush });

    const { getByPlaceholderText, getByRole } = render(<LoginForm />);

    // Simulate user input: invalid email
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'invalid_email' } });

    // Trigger the login button click
    fireEvent.click(getByRole('button', { name: 'LOG IN' }));

    // Wait and check that navigation does not occur
    await waitFor(() => {
      expect(mockPush).not.toHaveBeenCalled();
    });
  });

  /**
   * Tests that the LoginForm component should not submit when fields are empty.
   */
  it('should not submit with empty fields', () => {
    // Mock the useRouter hook to provide a push function
    const mockPush = jest.fn();
    const mockUseRouter = { push: mockPush };
    jest.spyOn(require('next/router'), 'useRouter').mockReturnValue(mockUseRouter);

    // Render the LoginForm component
    const { getByRole } = render(<LoginForm />);

    // Trigger the login button click
    fireEvent.click(getByRole('button', { name: 'LOG IN' }));

    // Check that the push function has not been called, indicating that form was not submitted
    expect(mockPush).not.toHaveBeenCalled();
  });

  /**
   * Tests that the LoginForm component should not navigate to a new page on invalid email format.
   */
  it('should not navigate on invalid email format', async () => {
    const mockPush = jest.fn();
    jest.spyOn(require('next/router'), 'useRouter').mockReturnValue({ push: mockPush });
    const { getByPlaceholderText, getByRole } = render(<LoginForm />);

    // Simulate user input for email and password fields
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'invalidemail' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });

    // Trigger the login button click
    fireEvent.click(getByRole('button', { name: 'LOG IN' }));

    // Wait for any asynchronous actions and effects to complete
    await waitFor(() => {
      // Assert that the router's push function was not called due to invalid email format
      expect(mockPush).not.toHaveBeenCalled();
    });
  });

});
