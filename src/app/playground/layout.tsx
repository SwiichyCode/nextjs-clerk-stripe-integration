import { CartProvider } from '@/modules/cart/context/cart-context';

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
