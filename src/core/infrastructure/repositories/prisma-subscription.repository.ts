import { Subscription } from '@/core/domain/entities/subscription.entity';
import { SubscriptionRepository } from '@/core/domain/ports/subscription.repository';
import { PrismaClient } from '@prisma/client';

import { mapPrismaToSubscription, toSubscriptionDTO } from '../dtos/subscription.dto';

export class PrismaSubscriptionRepository implements SubscriptionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(subscription: Subscription) {
    await this.prisma.subscription.create({ data: subscription });

    return toSubscriptionDTO(mapPrismaToSubscription(subscription));
  }
}
