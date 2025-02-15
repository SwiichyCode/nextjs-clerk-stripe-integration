import { Subscription } from '@/core/domain/entities/subscription.entity';
import { SubscriptionRepository } from '@/core/domain/ports/subscription.repository';
import prisma from '@/core/infrastructure/config/libs/prisma';

import { mapPrismaToSubscription, toSubscriptionDTO } from '../dtos/subscription.dto';

export class PrismaSubscriptionRepository implements SubscriptionRepository {
  async save(subscription: Subscription) {
    await prisma.subscription.create({ data: subscription });

    return toSubscriptionDTO(mapPrismaToSubscription(subscription));
  }
}
