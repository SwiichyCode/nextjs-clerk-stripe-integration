import { ApplicationContainer } from '#di/container';
import { DI_SYMBOLS } from '#di/types';
import { StripeSubscriptionCreatedHandler } from '@/core/infrastructure/webhooks/stripe-subscription-created-handler';
import { StripeWebhookHandler } from '@/core/infrastructure/webhooks/stripe-webhook-handler';
import { createModule } from '@evyweb/ioctopus';

export function createWebhookModule() {
  const webhookModule = createModule();

  webhookModule
    .bind(DI_SYMBOLS.StripeSubscriptionCreatedHandler)
    .toClass(StripeSubscriptionCreatedHandler, [DI_SYMBOLS.SubscriptionService, DI_SYMBOLS.CrashReporterService]);

  webhookModule.bind(DI_SYMBOLS.WebhookEventHandlers).toFactory(() => {
    return [ApplicationContainer.get(DI_SYMBOLS.StripeSubscriptionCreatedHandler)];
  });

  webhookModule
    .bind(DI_SYMBOLS.StripeWebhookHandler)
    .toClass(StripeWebhookHandler, [DI_SYMBOLS.WebhookEventHandlers, DI_SYMBOLS.CrashReporterService]);

  return webhookModule;
}
