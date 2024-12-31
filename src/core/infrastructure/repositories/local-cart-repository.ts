import { Cart } from '@/core/domain/entities/cart.entity';
import { ILocalCartRepository } from '@/core/domain/repositories/cart.repository';

export class LocalCartRepository implements ILocalCartRepository {
  private readonly STORAGE_KEY = 'shopping_cart';
  public readonly type = 'local';

  public getStorage(): Cart | null {
    if (typeof window === 'undefined') return null;

    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  private setStorage(cart: Cart): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
  }

  async create(cart: Cart): Promise<Cart> {
    this.setStorage(cart);

    return cart;
  }

  async clear(cart: Cart): Promise<Cart> {
    this.setStorage(cart);
    return cart;
  }
}
