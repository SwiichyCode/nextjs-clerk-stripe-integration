import { CheckoutSessionAdapter } from '@/core/domain/ports/checkout-session.repository';
import { MonitoringAdapter } from '@/core/domain/ports/monitoring.repository';
import { NoteRepository, NoteService } from '@/core/domain/ports/note.repository';
import { SubscriptionRepository, SubscriptionService } from '@/core/domain/ports/subscription.repository';

export const DI_SYMBOLS = {
  NoteService: Symbol.for('NoteService'),
  NoteRepository: Symbol.for('NoteRepository'),
  SubscriptionService: Symbol.for('SubscriptionService'),
  SubscriptionRepository: Symbol.for('SubscriptionRepository'),

  MonitoringAdapter: Symbol.for('MonitoringAdapter'),
  CheckoutSessionAdapter: Symbol.for('CheckoutSessionAdapter'),
};

export interface DI_RETURN_TYPES {
  NoteService: NoteService;
  NoteRepository: NoteRepository;
  SubscriptionService: SubscriptionService;
  SubscriptionRepository: SubscriptionRepository;

  MonitoringAdapter: MonitoringAdapter;
  CheckoutSessionAdapter: CheckoutSessionAdapter;
}
