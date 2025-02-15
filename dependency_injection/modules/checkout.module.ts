import { StripeAdapter } from '@/core/infrastructure/adapters/stripe.adapter';
import { createModule } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '../types';

export function createCheckoutModule() {
  const checkoutModule = createModule();

  checkoutModule.bind(DI_SYMBOLS.CheckoutSessionAdapter).toClass(StripeAdapter);

  return checkoutModule;
}
