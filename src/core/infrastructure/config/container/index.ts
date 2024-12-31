import { CartService } from '@/core/domain/services/cart.service';
import { LocalCartRepository } from '@/core/infrastructure/repositories/local-cart-repository';

class Container {
  private static instance: Container;
  private readonly localCartRepository = new LocalCartRepository();

  private readonly cartService = new CartService(this.localCartRepository);

  private constructor() {}

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  public getCartService(): CartService {
    return this.cartService;
  }
}

export const container = Container.getInstance();
