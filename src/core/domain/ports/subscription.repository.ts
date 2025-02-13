export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  stripePriceId: string;
}

export interface SubscriptionStatus {
  isActive: boolean;
  plan: SubscriptionPlan | null;
  currentPeriodEnd: Date | null;
}

// Port primaire
export interface SubscriptionService {
  createCheckoutSession(userId: string, userEmail: string, priceId: string): Promise<{ url: string }>;
  // createBillingPortalSession(userId: string): Promise<{ url: string }>;
  // getSubscriptionStatus(userId: string): Promise<SubscriptionStatus>;
}

// Port secondaire
export interface SubscriptionRepository {
  createCheckoutSession(userId: string, userEmail: string, priceId: string): Promise<{ url: string }>;
  // createBillingPortalSession(userId: string): Promise<{ url: string }>;
  // getSubscriptionStatus(userId: string): Promise<SubscriptionStatus>;
}
