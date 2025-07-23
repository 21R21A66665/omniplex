import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key from .env.local
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20', // It's good practice to pin to an API version
});

export async function POST(req: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd', // Use 'usd'. For INR, your Stripe account needs to be set up for it. 'usd' is safer for general test mode.
            product_data: {
              name: 'Pro Plan',
              description: 'Unlock advanced AI features for 6 months.',
            },
            unit_amount: 1000, // Amount in cents (e.g., $10.00 is 1000 cents)
          },
          quantity: 1,
        },
      ],
      mode: 'payment', // For one-time payments
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    return NextResponse.json({ id: session.id });

  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}