import { Note } from '@/core/domain/entities/note.entity';
import { CreateNoteInput, NoteRepository } from '@/core/domain/ports/note.repository';
import { slugify } from '@/core/domain/utils/string.utils';

export class NoteService {
  constructor(private readonly noteRepository: NoteRepository) {}

  async createNote(input: CreateNoteInput) {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: input.title,
      slug: slugify(input.title),
      content: input.content,
      userId: input.userId,
      createdAt: new Date(),
    };

    return this.noteRepository.save(newNote);
  }

  async deleteNote(id: string) {
    return this.noteRepository.delete(id);
  }

  async getUserNotes(userId: string) {
    return this.noteRepository.findByUserId(userId);
  }

  async getNoteBySlug(slug: string | null) {
    return await this.noteRepository.findBySlug(slug);
  }
}
