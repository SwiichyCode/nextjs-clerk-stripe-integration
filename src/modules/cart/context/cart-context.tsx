'use client';

import { Cart } from '@/core/domain/entities/cart.entity';
import { LOCALSTORAGE_KEY } from '@/core/infrastructure/config/constants';
import { useLocalStorage } from '@/core/presentation/hooks/useLocalStorage';
import { createContext, useContext, useEffect, useState } from 'react';

interface CartContextType {
  localeCart: Cart | null;
  isLoading: boolean;
  setLocaleCart: (cart: Cart | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [localeCart, setLocaleCart, isHydrated] = useLocalStorage<Cart | null>(LOCALSTORAGE_KEY, null);

  useEffect(() => {
    if (isHydrated) {
      setIsLoading(false);
    }
  }, [isHydrated]);

  return <CartContext.Provider value={{ localeCart, setLocaleCart, isLoading }}>{children}</CartContext.Provider>;
}

export const useLocalCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
