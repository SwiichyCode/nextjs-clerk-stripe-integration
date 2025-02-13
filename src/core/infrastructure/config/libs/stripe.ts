import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

export const STRIPE_CONFIGURATION = {
  apiKey: process.env.STRIPE_SECRET_KEY!,
  successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
  cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?canceled=true`,
  billingReturnUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
} as const;
