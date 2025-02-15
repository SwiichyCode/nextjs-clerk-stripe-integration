import { MailingAdapter } from '@/core/domain/ports/mailing.repository';
import { resend } from '@/core/infrastructure/config/libs/resend';

export class ResendAdapter implements MailingAdapter {
  async sendSubscriptionConfirmation(email: string, subscriptionId: string) {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Subscription confirmation',
      html: `<h1>Confirm your subscription</h1><p>Please confirm your subscription by clicking the link below:</p><p><a href="https://example.com/subscriptions/${subscriptionId}">https://example.com/subscriptions/${subscriptionId}</a></p>`,
    });
  }
}
