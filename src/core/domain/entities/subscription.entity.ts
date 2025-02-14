export class Subscription {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly status: SubscriptionStatus,
    public readonly subscriptionId: string,
    public readonly currentPeriodStart: Date,
    public readonly currentPeriodEnd: Date,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}

export type SubscriptionStatus =
  | 'active'
  | 'canceled'
  | 'incomplete'
  | 'incomplete_expired'
  | 'past_due'
  | 'trialing'
  | 'unpaid'
  | 'paused';
