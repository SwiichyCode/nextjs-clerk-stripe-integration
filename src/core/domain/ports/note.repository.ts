import { Note } from '@/core/domain/entities/note.entity';

// Port primaire (driving port)
export interface NoteService {
  createNote(input: CreateNoteInput): Promise<Note>;
  getUserNotes(userId: string): Promise<Note[]>;
  getNoteBySlug(slug: string): Promise<Note>;
}

// Port secondaire (driven port)
export interface NoteRepository {
  save(note: Note): Promise<Note>;
  findByUserId(userId: string): Promise<Note[]>;
  findBySlug(slug: string): Promise<Note | null>;
}

// Types
export interface CreateNoteInput {
  title: string;
  content: string;
  tags: string[];
  userId: string;
}
