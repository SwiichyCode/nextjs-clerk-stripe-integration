import { Note } from '@/core/domain/entities/note.entity';
import { CreateNoteInput, NoteRepository, NoteService } from '@/core/domain/ports/note.repository';
import { slugify } from '@/core/utils/string.utils';

export class NoteServiceImpl implements NoteService {
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

  async getNoteBySlug(slug: string) {
    return await this.noteRepository.findBySlug(slug);
  }
}
