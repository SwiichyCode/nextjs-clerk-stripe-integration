import { ApplicationContainer } from '#di/container';
import { DI_SYMBOLS } from '#di/types';
import { StripeSubscriptionCreatedHandler } from '@/core/infrastructure/webhooks/stripe-subscription-created-handler';
import { StripeWebhookHandler } from '@/core/infrastructure/webhooks/stripe-webhook-handler';
import { createModule } from '@evyweb/ioctopus';

export function createWebhookModule() {
  const webhookModule = createModule();

  // Configuration du handler de souscription
  webhookModule
    .bind(DI_SYMBOLS.StripeSubscriptionCreatedHandler)
    .toClass(StripeSubscriptionCreatedHandler, [DI_SYMBOLS.SubscriptionService, DI_SYMBOLS.CrashReporterService]);

  // Configuration du tableau des handlers d'événements
  webhookModule.bind(DI_SYMBOLS.WebhookEventHandlers).toFactory(() => {
    return [ApplicationContainer.get(DI_SYMBOLS.StripeSubscriptionCreatedHandler)];
  });

  // Configuration du handler principal de webhook
  webhookModule
    .bind(DI_SYMBOLS.StripeWebhookHandler)
    .toClass(StripeWebhookHandler, [DI_SYMBOLS.WebhookEventHandlers, DI_SYMBOLS.CrashReporterService]);

  return webhookModule;
}
