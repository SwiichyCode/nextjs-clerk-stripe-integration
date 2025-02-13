import { NoteServiceImpl } from '@/core/domain/services/note.service';
import prisma from '@/core/infrastructure/config/libs/prisma';
import { PrismaNoteRepository } from '@/core/infrastructure/repositories/prisma-note.repository';

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
  NoteService: Symbol('NoteService'),
  PrismaClient: Symbol('PrismaClient'),
} as const;

export function initializeDependencies() {
  const container = Container.getInstance();

  // Infrastructure
  container.register(TOKENS.PrismaClient, prisma);

  // Repositories
  container.register(TOKENS.NoteRepository, new PrismaNoteRepository(container.resolve(TOKENS.PrismaClient)));

  // Services
  container.register(TOKENS.NoteService, new NoteServiceImpl(container.resolve(TOKENS.NoteRepository)));
}

export const container = Container.getInstance();
