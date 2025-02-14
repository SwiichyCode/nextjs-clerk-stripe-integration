// Port primaire
export interface CheckoutSessionService {
  createCheckoutSession(userId: string, userEmail: string, priceId: string): Promise<{ url: string }>;
}

// Port secondaire
export interface CheckoutSessionAdapter {
  createCheckoutSession(userId: string, userEmail: string, priceId: string): Promise<{ url: string }>;
}
