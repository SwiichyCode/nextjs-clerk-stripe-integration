import { CheckoutSessionAdapter } from '@/core/domain/ports/checkout-session.repository';
import Stripe from 'stripe';

import { STRIPE_CONFIGURATION } from '../config/libs/stripe';

export class StripeAdapter implements CheckoutSessionAdapter {
  constructor(
    private readonly stripe: Stripe,
    private readonly config: typeof STRIPE_CONFIGURATION,
  ) {}

  async createCheckoutSession(userId: string, userEmail: string, priceId: string) {
    const session = await this.stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: this.config.successUrl,
      cancel_url: this.config.cancelUrl,
      customer_email: userEmail,
      metadata: {
        userId,
      },
      subscription_data: {
        // Attach userId to the subscription metadata to track user ownership
        // This metadata will persist through the subscription lifecycle and webhook events
        metadata: {
          userId: userId,
        },
      },
    });

    return { url: session.url! };
  }
}
