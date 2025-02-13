import { SubscriptionRepository, SubscriptionService } from '@/core/domain/ports/subscription.repository';

export class SubscriptionServiceImpl implements SubscriptionService {
  constructor(private readonly subscriptionRepository: SubscriptionRepository) {}

  async createCheckoutSession(userId: string, userEmail: string, priceId: string) {
    return this.subscriptionRepository.createCheckoutSession(userId, userEmail, priceId);
  }
}
