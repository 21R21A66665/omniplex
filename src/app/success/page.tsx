// src/app/success/page.tsx
// This file will be loaded when Stripe redirects to /success after a successful payment.
"use client";
import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const SuccessPage = () => {
  // You can optionally read the session_id from URL query params here
  // For example, if you wanted to fetch more details from Stripe:
  // import { useRouter } from 'next/navigation';
  // const router = useRouter();
  // const sessionId = router.query.session_id;

  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#e0ffe0', // Light green background
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#28a745', fontSize: '2.5em', marginBottom: '15px' }}>Payment Successful! 🎉</h1>
      <p style={{ fontSize: '1.2em', color: '#333', marginBottom: '25px' }}>
        Your Pro Plan purchase was completed successfully.
      </p>
      <p style={{ fontSize: '1em', color: '#555', marginBottom: '30px' }}>
        Thank you for your purchase!
      </p>
      <Link href="/" passHref>
        <button style={{
          padding: '12px 25px',
          backgroundColor: '#007bff', // Blue button
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1.1em',
          textDecoration: 'none', // For Link component
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default SuccessPage;