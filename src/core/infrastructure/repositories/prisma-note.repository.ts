import { Note } from '@/core/domain/entities/note.entity';
import { NoteRepository } from '@/core/domain/ports/note.repository';
import { PrismaClient } from '@prisma/client';

export class PrismaNoteRepository implements NoteRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(note: Note): Promise<Note> {
    const saved = await this.prisma.note.create({
      data: {
        id: note.id,
        title: note.title,
        slug: note.slug,
        content: note.content,
        tags: note.tags,
        userId: note.userId,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
      },
    });

    return new Note(
      saved.id,
      saved.title,
      saved.slug,
      saved.content,
      saved.tags,
      saved.userId,
      saved.createdAt,
      saved.updatedAt,
    );
  }

  async findByUserId(userId: string): Promise<Note[]> {
    const notes = await this.prisma.note.findMany({
      where: { userId },
    });

    return notes.map(
      note =>
        new Note(note.id, note.title, note.slug, note.content, note.tags, note.userId, note.createdAt, note.updatedAt),
    );
  }

  async findBySlug(slug: string): Promise<Note | null> {
    const note = await this.prisma.note.findUnique({
      where: { slug },
    });

    if (!note) return null;

    return new Note(
      note.id,
      note.title,
      note.slug,
      note.content,
      note.tags,
      note.userId,
      note.createdAt,
      note.updatedAt,
    );
  }
}
