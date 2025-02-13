'use client';

import { Button } from '@/core/presentation/components/common/ui/button';
import { useAction } from 'next-safe-action/hooks';

import { createCheckoutSessionAction } from './actions/create-checkout-session.action';

export const CheckoutButton = () => {
  const { execute, result } = useAction(createCheckoutSessionAction);

  return (
    <Button onClick={() => execute({ priceId: 'price_1Qs7m8FJs73GrKgrxp6WuctM' })} className="w-[15%]">
      {result.serverError ? result.serverError : 'Checkout'}
    </Button>
  );
};
