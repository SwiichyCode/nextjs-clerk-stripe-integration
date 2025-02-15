import { CheckoutSessionService } from '@/core/domain/ports/checkout-session.repository';
import { NoteRepository, NoteService } from '@/core/domain/ports/note.repository';
import { SubscriptionRepository, SubscriptionService } from '@/core/domain/ports/subscription.repository';
import { CrashReporterService } from '@/core/domain/services/crash-reporter.service';
import { SentryCrashReporterRepository } from '@/core/infrastructure/repositories/sentry-crash-reporter.repository';
import { StripeCheckoutSessionRepository } from '@/core/infrastructure/repositories/stripe-checkout-session.repoitory';

export const DI_SYMBOLS = {
  NoteService: Symbol.for('NoteService'),
  NoteRepository: Symbol.for('NoteRepository'),
  SubscriptionService: Symbol.for('SubscriptionService'),
  SubscriptionRepository: Symbol.for('SubscriptionRepository'),
  CrashReporterService: Symbol.for('CrashReporterService'),
  CheckoutSessionService: Symbol.for('CheckoutSessionService'),
  StripeCheckoutSessionRepository: Symbol.for('StripeCheckoutSessionRepository'),
  SentryCrashReporterRepository: Symbol.for('SentryCrashReporterRepository'),
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
}
