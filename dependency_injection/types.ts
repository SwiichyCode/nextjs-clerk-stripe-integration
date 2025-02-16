import { CheckoutSessionService } from '@/core/domain/ports/checkout-session.repository';
import { NoteRepository } from '@/core/domain/ports/note.repository';
import { SubscriptionRepository, SubscriptionService } from '@/core/domain/ports/subscription.repository';
import { CrashReporterService } from '@/core/domain/services/crash-reporter.service';
import { NoteService } from '@/core/domain/services/note.service';
import { SentryCrashReporterRepository } from '@/core/infrastructure/repositories/sentry-crash-reporter.repository';
import { StripeCheckoutSessionRepository } from '@/core/infrastructure/repositories/stripe-checkout-session.repository';
import { StripeSubscriptionCreatedHandler } from '@/core/infrastructure/webhooks/stripe-subscription-created-handler';
import { StripeWebhookHandler } from '@/core/infrastructure/webhooks/stripe-webhook-handler';
import { WebhookEventHandler } from '@/core/infrastructure/webhooks/types/webhook-event-handler.type';

export const DI_SYMBOLS = {
  NoteService: Symbol.for('NoteService'),
  NoteRepository: Symbol.for('NoteRepository'),
  SubscriptionService: Symbol.for('SubscriptionService'),
  SubscriptionRepository: Symbol.for('SubscriptionRepository'),
  CrashReporterService: Symbol.for('CrashReporterService'),
  CheckoutSessionService: Symbol.for('CheckoutSessionService'),
  StripeCheckoutSessionRepository: Symbol.for('StripeCheckoutSessionRepository'),
  SentryCrashReporterRepository: Symbol.for('SentryCrashReporterRepository'),

  StripeWebhookHandler: Symbol.for('StripeWebhookHandler'),
  StripeSubscriptionCreatedHandler: Symbol.for('StripeSubscriptionCreatedHandler'),
  WebhookEventHandlers: Symbol.for('WebhookEventHandlers'),
};

export interface DI_RETURN_TYPES {
  NoteService: NoteService;
  NoteRepository: NoteRepository;
  SubscriptionService: SubscriptionService;
  SubscriptionRepository: SubscriptionRepository;
  CrashReporterService: CrashReporterService;
  CheckoutSessionService: CheckoutSessionService;
  StripeCheckoutSessionRepository: StripeCheckoutSessionRepository;
  SentryCrashReporterRepository: SentryCrashReporterRepository;

  StripeWebhookHandler: StripeWebhookHandler;
  StripeSubscriptionCreatedHandler: StripeSubscriptionCreatedHandler;
  WebhookEventHandlers: WebhookEventHandler[];
}
