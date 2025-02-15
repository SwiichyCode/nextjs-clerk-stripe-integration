import { CheckoutSessionImpl } from '@/core/domain/services/checkout-session.service';
import { NoteServiceImpl } from '@/core/domain/services/note.service';
import { SubscriptionServiceImpl } from '@/core/domain/services/subscription.service';
import { SentryAdapter } from '@/core/infrastructure/adapters/sentry.adapter';
import { StripeAdapter } from '@/core/infrastructure/adapters/stripe.adapter';
import prisma from '@/core/infrastructure/config/libs/prisma';
import { STRIPE_CONFIGURATION, stripe } from '@/core/infrastructure/config/libs/stripe';
import { PrismaNoteRepository } from '@/core/infrastructure/repositories/prisma-note.repository';
import { PrismaSubscriptionRepository } from '@/core/infrastructure/repositories/prisma-subscription.repository';

type Token = string | symbol;

class Container {
  private static instance: Container;
  private dependencies = new Map<Token, unknown>();

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  public register<T>(token: Token, instance: T): void {
    this.dependencies.set(token, instance);
  }

  public resolve<T>(token: Token): T {
    const dependency = this.dependencies.get(token);
    if (!dependency) {
      throw new Error(`Aucune dépendance trouvée pour le token: ${String(token)}`);
    }
    return dependency as T;
  }
}

export const TOKENS = {
  NoteRepository: Symbol('NoteRepository'),
  SubscriptionRepository: Symbol('SubscriptionRepository'),
  NoteService: Symbol('NoteService'),
  SubscriptionService: Symbol('SubscriptionService'),
  MonitoringService: Symbol('MonitoringService'),
  PrismaClient: Symbol('PrismaClient'),
  CheckoutSessionService: Symbol('CheckoutSessionService'),
  CheckoutSessionAdapter: Symbol('CheckoutSessionAdapter'),
} as const;

export function initializeDependencies() {
  const container = Container.getInstance();

  // Infrastructure
  container.register(TOKENS.PrismaClient, prisma);

  // Repositories
  container.register(TOKENS.NoteRepository, new PrismaNoteRepository());
  container.register(
    TOKENS.SubscriptionRepository,
    new PrismaSubscriptionRepository(container.resolve(TOKENS.PrismaClient)),
  );

  // Adapters
  container.register(TOKENS.CheckoutSessionAdapter, new StripeAdapter(stripe, STRIPE_CONFIGURATION));
  container.register(TOKENS.MonitoringService, new SentryAdapter());

  // Services
  container.register(TOKENS.NoteService, new NoteServiceImpl(container.resolve(TOKENS.NoteRepository)));
  container.register(
    TOKENS.CheckoutSessionService,
    new CheckoutSessionImpl(container.resolve(TOKENS.CheckoutSessionAdapter)),
  );
  container.register(
    TOKENS.SubscriptionService,
    new SubscriptionServiceImpl(container.resolve(TOKENS.SubscriptionRepository)),
  );
}

export const container = Container.getInstance();
