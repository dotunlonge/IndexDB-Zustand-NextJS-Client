import React from "react";
import Image from 'next/image';
import styles from "@/styles/pages/LoginPage.module.scss";
import Link from "next/link";
import LoginForm from '@/components/LoginPage/LoginForm';
import Head from 'next/head';

/**
 * LoginPage component.
 * This component renders the login page of the application, featuring a user login form,
 * a decorative image, and a logo. It uses the Inter font for typography.
 *
 * @returns The LoginPage component.
 */

 const LoginPage: React.FC = () => {
   return (
     <>
       <Head>
         <title>Login Page - Lendsqr</title>
         <meta name="description" content="Login to Lendsqr. Access your account and manage your data." />
         <meta property="og:title" content="Login Page - Lendsqr" />
         <meta property="og:description" content="Login to Lendsqr. Access your account and manage your data." />
         <meta property="og:image" content="/path/to/your/og-image.jpg" />
         <meta property="og:type" content="website" />
         <meta property="og:url" content="https://www.yourappname.com/login" />
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <main className={`flex ${styles.container}`}>
         <div className={styles.header}>
           <Image src="/logo.svg" width={173.765} height={36} alt="Logo" />
         </div>

         <section className={styles.sections}>
           <div className={styles.leftSide}>
             <Image src="/image-on-homepage.svg" alt="Decorative image" width={600} height={337.569} />
           </div>

           <div className={styles.rightSide}>
             <h3>Welcome!</h3>
             <p>Enter details to login.</p>
             <LoginForm />
           </div>
         </section>
       </main>
     </>
   )
 }
export default LoginPage;
