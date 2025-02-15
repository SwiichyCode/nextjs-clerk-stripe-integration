export interface CheckoutSessionService {
  createCheckoutSession(userId: string, userEmail: string, priceId: string): Promise<{ url: string }>;
}

export interface CheckoutSessionRepository {
  createCheckoutSession(userId: string, userEmail: string, priceId: string): Promise<{ url: string }>;
}
