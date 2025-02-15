import { CheckoutSessionRepository } from '@/core/domain/ports/checkout-session.repository';

export class CheckoutSessionService implements CheckoutSessionService {
  constructor(private readonly checkoutSessionRepository: CheckoutSessionRepository) {}

  async createCheckoutSession(userId: string, userEmail: string, priceId: string) {
    return this.checkoutSessionRepository.createCheckoutSession(userId, userEmail, priceId);
  }
}
