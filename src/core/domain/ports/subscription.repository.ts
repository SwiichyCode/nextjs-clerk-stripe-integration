import { Subscription } from '@/core/domain/entities/subscription.entity';

export interface SubscriptionService {
  createSubscription(input: CreateSubscriptionInput): Promise<Subscription>;
}

export interface SubscriptionRepository {
  save(subscription: Subscription): Promise<Subscription>;
}

export interface CreateSubscriptionInput {
  userId: string;
  status: 'active' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'past_due' | 'canceled' | 'unpaid' | 'paused';
  subscriptionId: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
}
