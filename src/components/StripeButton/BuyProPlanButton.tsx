"use client"; // This component must be a Client Component

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Load your publishable key once outside of a component's render method
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const BuyProPlanButton: React.FC = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to create Stripe Checkout session:', errorData.error);
        alert('Error initiating payment: ' + errorData.error);
        return;
      }

      const session = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          console.error('Stripe Checkout Error:', error.message);
          alert('Payment process cancelled or failed: ' + error.message);
        }
      } else {
        console.error('Stripe.js failed to load.');
        alert('Payment system not ready.');
      }

    } catch (error) {
      console.error('Network or unexpected error:', error);
      alert('An unexpected error occurred during payment initiation.');
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#6772E5', // A nice Stripe-like blue
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px auto', // Center the button and give it some margin
        display: 'block' // Make it a block element so margin: auto works
      }}
    >
      Upgrade to Pro Plan - $10
    </button>
  );
};

export default BuyProPlanButton;