import { NoteRepository, NoteService } from '@/core/domain/ports/note.repository';

export const DI_SYMBOLS = {
  NoteService: Symbol.for('NoteService'),
  NoteRepository: Symbol.for('NoteRepository'),
};

export interface DI_RETURN_TYPES {
  NoteService: NoteService;
  NoteRepository: NoteRepository;
}
