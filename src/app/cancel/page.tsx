// src/app/cancel/page.tsx
// This file will be loaded when Stripe redirects to /cancel after a payment is cancelled or fails.
"use client";
import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const CancelPage = () => {
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#ffe0e0', // Light red background
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#dc3545', fontSize: '2.5em', marginBottom: '15px' }}>Payment Cancelled! 😢</h1>
      <p style={{ fontSize: '1.2em', color: '#333', marginBottom: '25px' }}>
        Your Pro Plan purchase was not completed.
      </p>
      <p style={{ fontSize: '1em', color: '#555', marginBottom: '30px' }}>
        You can try again or contact support if you need assistance.
      </p>
      <Link href="/" passHref>
        <button style={{
          padding: '12px 25px',
          backgroundColor: '#6c757d', // Grey button
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1.1em',
          textDecoration: 'none', // For Link component
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5a6268')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6c757d')}
        >
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default CancelPage;