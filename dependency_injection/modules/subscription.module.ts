import { SubscriptionService } from '@/core/domain/services/subscription.service';
import { PrismaSubscriptionRepository } from '@/core/infrastructure/repositories/prisma-subscription.repository';
import { createModule } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '../types';

export function createSubscriptionModule() {
  const subscriptionModule = createModule();

  subscriptionModule
    .bind(DI_SYMBOLS.SubscriptionRepository)
    .toClass(PrismaSubscriptionRepository, [DI_SYMBOLS.SentryCrashReporterRepository]);

  subscriptionModule
    .bind(DI_SYMBOLS.SubscriptionService)
    .toClass(SubscriptionService, [DI_SYMBOLS.SubscriptionRepository]);

  return subscriptionModule;
}
