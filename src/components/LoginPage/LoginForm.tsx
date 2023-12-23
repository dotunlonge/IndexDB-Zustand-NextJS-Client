import React, { useState } from 'react';
import styles from "@/styles/pages/LoginPage.module.scss";
import Link from "next/link";
import { useRouter } from 'next/router'

/**
 * LoginForm component handles user login.
 *
 * State:
 * - email: stores the user's email input.
 * - password: stores the user's password input.
 * - showPassword: toggles the visibility of the password.
 *
 * Handlers:
 * - handleEmailChange: updates the email state on input change.
 * - handlePasswordChange: updates the password state on input change.
 * - togglePasswordVisibility: toggles the password visibility.
 * - handleSubmit: handles the form submission.
 */
 const LoginForm: React.FC<{}> = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Form submission logic
    router.push("/dashboard/users");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div className={styles.formControl}>
        <input
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          id={styles.togglePasswordVisibility}
          data-testid="password-toggle-button"
        >
          {showPassword ? 'HIDE' : 'SHOW'}
        </button>
      </div>

      <div className={styles.formControl}>
        <Link href="/forgot-password" id={styles.forgotPassword}>FORGOT PASSWORD?</Link>
      </div>

      <div className={styles.formControl}>
        <button type="submit" id={styles.logIn}>LOG IN</button>
      </div>
    </form>
  );
}


export default LoginForm;
