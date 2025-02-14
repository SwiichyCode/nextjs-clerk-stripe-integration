import { Subscription, SubscriptionStatus } from '@/core/domain/entities/subscription.entity';

export interface SubscriptionDTO {
  id: string;
  userId: string;
  status: SubscriptionStatus;
  subscriptionId: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const toSubscriptionDTO = (subscription: Subscription): SubscriptionDTO => ({
  id: subscription.id,
  userId: subscription.userId,
  status: subscription.status,
  subscriptionId: subscription.subscriptionId,
  currentPeriodStart: subscription.currentPeriodStart,
  currentPeriodEnd: subscription.currentPeriodEnd,
  createdAt: subscription.createdAt,
  updatedAt: subscription.updatedAt,
});

export const mapPrismaToSubscription = (data: {
  id: string;
  userId: string;
  status: SubscriptionStatus;
  subscriptionId: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  createdAt: Date;
  updatedAt: Date;
}): Subscription => {
  return new Subscription(
    data.id,
    data.userId,
    data.status,
    data.subscriptionId,
    data.currentPeriodStart,
    data.currentPeriodEnd,
    data.createdAt,
    data.updatedAt,
  );
};
