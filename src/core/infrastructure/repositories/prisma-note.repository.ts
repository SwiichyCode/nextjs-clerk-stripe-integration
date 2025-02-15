import { Note } from '@/core/domain/entities/note.entity';
import { NoteRepository } from '@/core/domain/ports/note.repository';
import { CrashReporterService } from '@/core/domain/services/crash-reporter.service';
import prisma from '@/core/infrastructure/config/libs/prisma';

export class PrismaNoteRepository implements NoteRepository {
  constructor(private readonly crashReporterService: CrashReporterService) {}

  async save(note: Note): Promise<Note> {
    try {
      return await prisma.note.create({ data: note });
    } catch (error) {
      this.crashReporterService.report(error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await prisma.note.delete({ where: { id } });
    } catch (error) {
      this.crashReporterService.report(error);
      throw error;
    }
  }

  async findById(id: string): Promise<Note | null> {
    try {
      const note = await prisma.note.findUnique({ where: { id } });
      return note ? note : null;
    } catch (error) {
      this.crashReporterService.report(error);
      throw error;
    }
  }

  async findByUserId(userId: string): Promise<Note[]> {
    try {
      return await prisma.note.findMany({ where: { userId } });
    } catch (error) {
      this.crashReporterService.report(error);
      throw error;
    }
  }

  async findBySlug(slug: string): Promise<Note | null> {
    try {
      const note = await prisma.note.findUnique({ where: { slug } });
      return note ? note : null;
    } catch (error) {
      this.crashReporterService.report(error);
      throw error;
    }
  }
}
