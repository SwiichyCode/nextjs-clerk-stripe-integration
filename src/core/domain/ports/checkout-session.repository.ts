export interface CheckoutSessionService {
  createCheckoutSession(userId: string, userEmail: string, priceId: string): Promise<{ url: string }>;
}

export interface CheckoutSessionAdapter {
  createCheckoutSession(userId: string, userEmail: string, priceId: string): Promise<{ url: string }>;
}
