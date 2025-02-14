'use server';

import { CheckoutSessionService } from '@/core/domain/ports/checkout-session.repository';
import { TOKENS, container } from '@/core/infrastructure/config/container';
import { authActionClient } from '@/core/presentation/config/libs/next-safe-action';
import { redirect } from 'next/navigation';

import { createCheckoutSessionSchema } from '../forms/create-checkout-session.schema';

export const createCheckoutSessionAction = authActionClient
  .schema(createCheckoutSessionSchema)
  .action(async ({ parsedInput, ctx }) => {
    const checkoutSessionService = container.resolve<CheckoutSessionService>(TOKENS.CheckoutSessionService);

    try {
      const { url } = await checkoutSessionService.createCheckoutSession(
        ctx.userId,
        'test@gmail.com',
        parsedInput.priceId,
      );

      redirect(url);
    } catch (error) {
      throw error;
    }
  });
