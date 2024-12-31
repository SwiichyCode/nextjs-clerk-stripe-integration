import { Cart } from '@/core/domain/entities/cart.entity';

export interface ILocalCartRepository {
  create(cart: Cart): Promise<Cart>;
  clear(cart: Cart): Promise<Cart>;
}

export interface IServerCartRepository {
  create(cart: Cart): Promise<Cart>;
  clear(cartId: string): Promise<Cart>;
}

export type CartRepositoryType = 'local' | 'server';
