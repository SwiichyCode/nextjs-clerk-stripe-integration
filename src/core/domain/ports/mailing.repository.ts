export interface MailingAdapter {
  sendSubscriptionConfirmation(email: string, subscriptionId: string): Promise<void>;
}
