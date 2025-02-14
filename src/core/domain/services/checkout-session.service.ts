import { CheckoutSessionAdapter, CheckoutSessionService } from '@/core/domain/ports/checkout-session.repository';

export class CheckoutSessionImpl implements CheckoutSessionService {
  constructor(private readonly checkoutSessionAdapter: CheckoutSessionAdapter) {}

  async createCheckoutSession(userId: string, userEmail: string, priceId: string) {
    return this.checkoutSessionAdapter.createCheckoutSession(userId, userEmail, priceId);
  }
}
