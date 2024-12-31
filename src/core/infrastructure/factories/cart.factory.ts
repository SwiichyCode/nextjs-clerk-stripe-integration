import { Cart } from '@/core/domain/entities/cart.entity';
import { CART_EXPIRATION_DAYS, DEFAULT_CURRENCY } from '@/core/infrastructure/config/constants';
import { v4 as uuidv4 } from 'uuid';

export class CartFactory {
  static create(userId: string): Cart {
    return {
      id: uuidv4(),
      userId,
      items: [],
      subtotal: 0,
      total: 100,
      currency: DEFAULT_CURRENCY,
      createdAt: new Date(),
      updatedAt: new Date(),
      expiresAt: this.calculateExpirationDate(),
      metadata: {},
    };
  }

  static clear(cart: Cart): Cart {
    return {
      ...cart,
      items: [],
      subtotal: 0,
      total: 0,
      updatedAt: new Date(),
    };
  }

  private static calculateExpirationDate(): Date {
    return new Date(Date.now() + 1000 * 60 * 60 * 24 * CART_EXPIRATION_DAYS);
  }
}
