import { CheckoutSessionRepository } from '@/core/domain/ports/checkout-session.repository';
import { STRIPE_CONFIGURATION, stripe } from '@/core/infrastructure/config/libs/stripe';

export class StripeCheckoutSessionRepository implements CheckoutSessionRepository {
  async createCheckoutSession(userId: string, userEmail: string, priceId: string) {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: STRIPE_CONFIGURATION.successUrl,
      cancel_url: STRIPE_CONFIGURATION.cancelUrl,
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
