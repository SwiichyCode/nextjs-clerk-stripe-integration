import { Subscription } from '@/core/domain/entities/subscription.entity';
import { CreateSubscriptionInput, SubscriptionRepository } from '@/core/domain/ports/subscription.repository';

export class SubscriptionService {
  constructor(private readonly subscriptionRepository: SubscriptionRepository) {}

  async createSubscription(input: CreateSubscriptionInput) {
    const newSubscription: Subscription = {
      id: crypto.randomUUID(),
      userId: input.userId,
      status: input.status,
      subscriptionId: input.subscriptionId,
      currentPeriodStart: input.currentPeriodStart,
      currentPeriodEnd: input.currentPeriodEnd,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.subscriptionRepository.save(newSubscription);
  }
}
