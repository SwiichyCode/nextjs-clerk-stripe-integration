'use client';

import { container } from '@/core/infrastructure/config/container';
import { Button } from '@/core/presentation/components/common/ui/button';
import { useLocalCart } from '@/modules/cart/context/cart-context';

export default function PlaygroundPage() {
  const cartService = container.getCartService();
  const { localeCart, setLocaleCart, isLoading } = useLocalCart();

  async function handleCreateCart() {
    const cart = await cartService.createCart('1', 'local');
    setLocaleCart(cart);
  }

  async function handleClearCart() {
    const cart = await cartService.clearCart(localeCart!);
    setLocaleCart(cart);
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-4">
        <Button onClick={handleCreateCart}>Create Cart</Button>
        <Button onClick={handleClearCart} variant="destructive">
          Clear Cart
        </Button>

        {!isLoading ? <pre>{JSON.stringify(localeCart, null, 2)}</pre> : <p>Loading...</p>}
      </div>
    </div>
  );
}
