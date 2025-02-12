import { Note } from '@/core/domain/entities/note.entity';
import { CreateNoteInput, NoteRepository, NoteService } from '@/core/domain/ports/note.repository';
import { slugify } from '@/core/utils/string.utils';

export class NoteServiceImpl implements NoteService {
  constructor(private readonly noteRepository: NoteRepository) {}

  async createNote(input: CreateNoteInput): Promise<Note> {
    const note = new Note(
      crypto.randomUUID(),
      input.title,
      slugify(input.title),
      input.content,
      input.tags,
      input.userId,
      new Date(),
    );

    return this.noteRepository.save(note);
  }

  async getUserNotes(userId: string): Promise<Note[]> {
    return this.noteRepository.findByUserId(userId);
  }

  async getNoteBySlug(slug: string): Promise<Note> {
    const note = await this.noteRepository.findBySlug(slug);
    if (!note) throw new Error('Note not found');
    return note;
  }
}
