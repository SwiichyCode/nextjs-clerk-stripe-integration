import { CrashReporterService } from '@/core/domain/services/crash-reporter.service';
import { WebhookEventHandler } from '@/core/infrastructure/webhooks/types/webhook-event-handler.type';
import Stripe from 'stripe';

export class StripeWebhookHandler {
  constructor(
    private readonly eventHandlers: WebhookEventHandler[],
    private readonly crashReporterService: CrashReporterService,
  ) {}

  async handleWebhookEvent(event: Stripe.Event): Promise<void> {
    const handler = this.eventHandlers.find(h => h.supports(event.type));

    if (!handler) {
      this.crashReporterService.report(new Error(`No handler found for event type ${event.type}`));
      return;
    }

    await handler.handle(event);
  }
}
