import { Note } from '@/core/domain/entities/note.entity';
import type { NoteRepository } from '@/core/domain/ports/note.repository';
import prisma from '@/core/infrastructure/config/libs/prisma';
import { mapPrismaToNote, toNoteDTO } from '@/core/infrastructure/dtos/note.dto';
import { DatabaseConnectionError } from '@/core/infrastructure/errors/repository.errors';
import { Prisma } from '@prisma/client';

export class PrismaNoteRepository implements NoteRepository {
  async save(note: Note) {
    const saved = await prisma.note.create({ data: note });

    return toNoteDTO(mapPrismaToNote(saved));
  }

  async delete(id: string) {
    await prisma.note.delete({ where: { id } });
  }

  async findById(id: string) {
    const note = await prisma.note.findUnique({ where: { id } });

    return note ? toNoteDTO(mapPrismaToNote(note)) : null;
  }

  async findByUserId(userId: string) {
    const notes = await prisma.note.findMany({ where: { userId } });

    return notes.map(note => toNoteDTO(mapPrismaToNote(note)));
  }

  async findBySlug(slug: string) {
    try {
      const note = await prisma.note.findUnique({ where: { slug } });

      return note ? toNoteDTO(mapPrismaToNote(note)) : null;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) throw new DatabaseConnectionError(error.message);

      throw error;
    }
  }
}
