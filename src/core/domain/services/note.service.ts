import { Note } from '@/core/domain/entities/note.entity';
import { NoteNotFoundException } from '@/core/domain/errors/note.exceptions';
import { CreateNoteInput, NoteRepository, NoteService } from '@/core/domain/ports/note.repository';
import { slugify } from '@/core/utils/string.utils';

export class NoteServiceImpl implements NoteService {
  constructor(private readonly noteRepository: NoteRepository) {}

  async createNote(input: CreateNoteInput) {
    const note = new Note(
      crypto.randomUUID(),
      input.title,
      slugify(input.title),
      input.content,
      input.userId,
      new Date(),
    );

    return this.noteRepository.save(note);
  }

  async deleteNote(id: string) {
    const note = await this.noteRepository.findById(id);

    if (!note) throw new NoteNotFoundException(id);

    return this.noteRepository.delete(id);
  }

  async getUserNotes(userId: string) {
    return this.noteRepository.findByUserId(userId);
  }

  async getNoteBySlug(slug: string) {
    return await this.noteRepository.findBySlug(slug);
  }
}
