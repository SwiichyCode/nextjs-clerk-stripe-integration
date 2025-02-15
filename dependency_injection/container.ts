import { createContainer } from '@evyweb/ioctopus';

import { createCheckoutModule } from './modules/checkout.module';
import { createMonitoringModule } from './modules/monitoring.module';
import { createNoteModule } from './modules/note.module';
import { createSubscriptionModule } from './modules/subscription.module';
import { DI_RETURN_TYPES, DI_SYMBOLS } from './types';

const ApplicationContainer = createContainer();

ApplicationContainer.load(Symbol('NoteModule'), createNoteModule());
ApplicationContainer.load(Symbol('SubscriptionModule'), createSubscriptionModule());
ApplicationContainer.load(Symbol('MonitoringModule'), createMonitoringModule());
ApplicationContainer.load(Symbol('CheckoutModule'), createCheckoutModule());

export function getInjection<K extends keyof typeof DI_SYMBOLS>(symbol: K): DI_RETURN_TYPES[K] {
  return ApplicationContainer.get(DI_SYMBOLS[symbol]);
}
