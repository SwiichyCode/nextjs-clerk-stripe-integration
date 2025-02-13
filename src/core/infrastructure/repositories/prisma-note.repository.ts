import { Note } from '@/core/domain/entities/note.entity';
import { NoteRepository } from '@/core/domain/ports/note.repository';
import { mapPrismaToNote, toNoteDTO } from '@/core/infrastructure/dtos/note.dto';
import { PrismaClient } from '@prisma/client';

export class PrismaNoteRepository implements NoteRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(note: Note): Promise<Note> {
    const saved = await this.prisma.note.create({
      data: note,
    });

    return toNoteDTO(mapPrismaToNote(saved));
  }

  async delete(id: string): Promise<void> {
    await this.prisma.note.delete({
      where: { id },
    });
  }

  async findById(id: string): Promise<Note | null> {
    const note = await this.prisma.note.findUnique({
      where: { id },
    });

    return note ? toNoteDTO(mapPrismaToNote(note)) : null;
  }

  async findByUserId(userId: string): Promise<Note[]> {
    const notes = await this.prisma.note.findMany({
      where: { userId },
    });

    return notes.map(note => toNoteDTO(mapPrismaToNote(note)));
  }

  async findBySlug(slug: string): Promise<Note | null> {
    const note = await this.prisma.note.findUnique({
      where: { slug },
    });

    return note ? toNoteDTO(mapPrismaToNote(note)) : null;
  }
}
