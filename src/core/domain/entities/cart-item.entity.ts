export class CartItem {
  constructor(
    public readonly id: string,
    public readonly productId: string,
    public readonly quantity: number,
    public readonly price: number,
    public readonly variantId?: string,
    public readonly attributes?: Record<string, string>,
    public readonly addedAt: Date = new Date(),
  ) {}
}
