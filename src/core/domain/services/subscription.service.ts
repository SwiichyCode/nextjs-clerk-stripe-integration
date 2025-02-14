import { Subscription } from '@/core/domain/entities/subscription.entity';
import {
  CreateSubscriptionInput,
  SubscriptionRepository,
  SubscriptionService,
} from '@/core/domain/ports/subscription.repository';

export class SubscriptionServiceImpl implements SubscriptionService {
  constructor(private readonly subscriptionRepository: SubscriptionRepository) {}

  async createSubscription(input: CreateSubscriptionInput) {
    const subscription = new Subscription(
      crypto.randomUUID(),
      input.userId,
      input.status,
      input.subscriptionId,
      input.currentPeriodStart,
      input.currentPeriodEnd,
      new Date(),
      new Date(),
    );

    return this.subscriptionRepository.save(subscription);
  }
}
