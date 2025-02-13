'use server';

import { SubscriptionService } from '@/core/domain/ports/subscription.repository';
import { TOKENS, container } from '@/core/infrastructure/config/container';
import { authActionClient } from '@/core/presentation/config/libs/next-safe-action';
import { redirect } from 'next/navigation';

import { createCheckoutSessionSchema } from '../forms/create-checkout-session.schema';

export const createCheckoutSessionAction = authActionClient
  .schema(createCheckoutSessionSchema)
  .action(async ({ parsedInput, ctx }) => {
    const subscriptionService = container.resolve<SubscriptionService>(TOKENS.SubscriptionService);

    try {
      const { url } = await subscriptionService.createCheckoutSession(
        ctx.userId,
        'test@gmail.com',
        parsedInput.priceId,
      );

      redirect(url);
    } catch (error) {
      throw error;
    }
  });
