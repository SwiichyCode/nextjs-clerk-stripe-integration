import { stripe } from '@/core/infrastructure/config/libs/stripe';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

import { getInjection } from '../../../../../dependency_injection/container';

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
    switch (event.type) {
      case 'customer.subscription.created':
        const subscriptionService = getInjection('SubscriptionService');
        const crashReporterService = getInjection('CrashReporterService');

        try {
          await subscriptionService.createSubscription({
            userId: event.data.object.metadata.userId,
            status: event.data.object.status,
            subscriptionId: event.data.object.id,
            currentPeriodStart: new Date(event.data.object.current_period_start * 1000),
            currentPeriodEnd: new Date(event.data.object.current_period_end * 1000),
          });
        } catch (error) {
          crashReporterService.report(error);
          throw error;
        }
    }
  } catch (error) {
    console.error('Webhook error:', error);
    return new NextResponse('Webhook handler failed', { status: 500 });
  }

  return new NextResponse('Webhook Received', { status: 200 });
}
