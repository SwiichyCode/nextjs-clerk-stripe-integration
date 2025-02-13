import { Note } from '@/core/domain/entities/note.entity';

export interface NoteDTO {
  id: string;
  title: string;
  slug: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date | undefined;
}

export const toNoteDTO = (note: Note): NoteDTO => ({
  id: note.id,
  title: note.title,
  slug: note.slug,
  content: note.content,
  userId: note.userId,
  createdAt: note.createdAt,
  updatedAt: note.updatedAt,
});

export const mapPrismaToNote = (data: {
  id: string;
  title: string;
  slug: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}): Note => {
  return new Note(data.id, data.title, data.slug, data.content, data.userId, data.createdAt, data.updatedAt);
};
