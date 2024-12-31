import { CartItem } from './cart-item.entity';

export class Cart {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly items: CartItem[] = [],
    public readonly subtotal: number = 0,
    public readonly total: number = 0,
    public readonly currency: string = 'USD',
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date(),
    public readonly expiresAt: Date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
    public readonly metadata: Record<string, string> = {},
  ) {}
}
