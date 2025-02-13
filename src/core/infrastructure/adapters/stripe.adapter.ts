import { SubscriptionRepository } from '@/core/domain/ports/subscription.repository';
import Stripe from 'stripe';

import { STRIPE_CONFIGURATION } from '../config/libs/stripe';

export class StripeAdapter implements SubscriptionRepository {
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
    });

    return { url: session.url! };
  }
}
