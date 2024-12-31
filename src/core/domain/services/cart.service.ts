import { Cart } from '@/core/domain/entities/cart.entity';
import {
  CartRepositoryType,
  ILocalCartRepository,
  IServerCartRepository,
} from '@/core/domain/repositories/cart.repository';
import { CartFactory } from '@/core/infrastructure/factories/cart.factory';

export class CartService {
  constructor(
    private readonly localRepository?: ILocalCartRepository,
    private readonly serverRepository?: IServerCartRepository,
  ) {}

  async createCart(userId: string, type: CartRepositoryType = 'local'): Promise<Cart> {
    const cart = CartFactory.create(userId);

    if (type === 'server') {
      if (!this.serverRepository) throw new Error('Server repository is not defined');
      return this.serverRepository.create(cart);
    }

    if (!this.localRepository) throw new Error('Local repository is not defined');
    return this.localRepository.create(cart);
  }

  async clearCart(cart: Cart, cartId?: string, type: CartRepositoryType = 'local'): Promise<Cart> {
    const newCart = CartFactory.clear(cart);

    if (type === 'server') {
      if (!this.serverRepository) throw new Error('Server repository is not defined');
      if (!cartId) throw new Error('Cart ID is required');

      return this.serverRepository.clear(cartId);
    }

    if (!this.localRepository) throw new Error('Local repository is not defined');
    return this.localRepository.clear(newCart);
  }
}
