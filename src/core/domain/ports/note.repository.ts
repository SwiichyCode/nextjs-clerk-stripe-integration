import type { Note } from '@/core/domain/entities/note.entity';

export interface NoteService {
  createNote(input: CreateNoteInput): Promise<Note>;
  deleteNote(id: string): Promise<void>;
  getUserNotes(userId: string): Promise<Note[]>;
  getNoteBySlug(slug: string): Promise<Note | null>;
}

export interface NoteRepository {
  save(note: Note): Promise<Note>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Note | null>;
  findByUserId(userId: string): Promise<Note[]>;
  findBySlug(slug: string): Promise<Note | null>;
}

export interface CreateNoteInput {
  title: string;
  content: string;
  userId: string;
}
