import { getInjection } from '#di/container';
import { stripe } from '@/core/infrastructure/config/libs/stripe';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('Stripe-Signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (error) {
    return new NextResponse(`Webhook Error: ${error instanceof Error ? error.message : 'Unknown error'}`, {
      status: 400,
    });
  }

  try {
    const stripeWebhookHandler = getInjection('StripeWebhookHandler');
    await stripeWebhookHandler.handleWebhookEvent(event);
  } catch (error) {
    console.error('Webhook error:', error);
    return new NextResponse('Webhook handler failed', { status: 500 });
  }

  return new NextResponse('Webhook Received', { status: 200 });
}
