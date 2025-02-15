import { Subscription } from '@/core/domain/entities/subscription.entity';
import { SubscriptionRepository } from '@/core/domain/ports/subscription.repository';
import { CrashReporterService } from '@/core/domain/services/crash-reporter.service';
import prisma from '@/core/infrastructure/config/libs/prisma';

export class PrismaSubscriptionRepository implements SubscriptionRepository {
  constructor(private readonly crashReporterService: CrashReporterService) {}

  async save(subscription: Subscription) {
    try {
      return await prisma.subscription.create({ data: subscription });
    } catch (error) {
      this.crashReporterService.report(error);
      throw error;
    }
  }
}
