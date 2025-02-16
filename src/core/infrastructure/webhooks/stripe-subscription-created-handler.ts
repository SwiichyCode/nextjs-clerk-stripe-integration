import { CrashReporterService } from '@/core/domain/services/crash-reporter.service';
import { SubscriptionService } from '@/core/domain/services/subscription.service';
import { WebhookEventHandler } from '@/core/infrastructure/webhooks/types/webhook-event-handler.type';
import Stripe from 'stripe';

export class StripeSubscriptionCreatedHandler implements WebhookEventHandler {
  constructor(
    private readonly subscriptionService: SubscriptionService,
    private readonly crashReporterService: CrashReporterService,
  ) {}

  supports(eventType: Stripe.Event.Type): boolean {
    return eventType === 'customer.subscription.created';
  }

  async handle(event: Stripe.Event): Promise<void> {
    try {
      if (event.type === 'customer.subscription.created') {
        await this.subscriptionService.createSubscription({
          userId: event.data.object.metadata.userId,
          status: event.data.object.status,
          subscriptionId: event.data.object.id,
          currentPeriodStart: new Date(event.data.object.current_period_start * 1000),
          currentPeriodEnd: new Date(event.data.object.current_period_end * 1000),
        });
      }
    } catch (error) {
      this.crashReporterService.report(error);
      throw error;
    }
  }
}
