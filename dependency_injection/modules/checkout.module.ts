import { CheckoutSessionService } from '@/core/domain/services/checkout-session.service';
import { StripeCheckoutSessionRepository } from '@/core/infrastructure/repositories/stripe-checkout-session.repository';
import { createModule } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '../types';

export function createCheckoutModule() {
  const checkoutModule = createModule();

  checkoutModule.bind(DI_SYMBOLS.StripeCheckoutSessionRepository).toClass(StripeCheckoutSessionRepository);
  checkoutModule
    .bind(DI_SYMBOLS.CheckoutSessionService)
    .toClass(CheckoutSessionService, [DI_SYMBOLS.StripeCheckoutSessionRepository]);

  return checkoutModule;
}
