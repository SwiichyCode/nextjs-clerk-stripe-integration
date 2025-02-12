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
        userId: note.userId,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
      },
    });

    return new Note(saved.id, saved.title, saved.slug, saved.content, saved.userId, saved.createdAt, saved.updatedAt);
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

    if (!note) return null;

    return note;
  }

  async findByUserId(userId: string): Promise<Note[]> {
    return await this.prisma.note.findMany({
      where: { userId },
    });
  }

  async findBySlug(slug: string): Promise<Note | null> {
    const note = await this.prisma.note.findUnique({
      where: { slug },
    });

    if (!note) return null;

    return new Note(note.id, note.title, note.slug, note.content, note.userId, note.createdAt, note.updatedAt);
  }
}
