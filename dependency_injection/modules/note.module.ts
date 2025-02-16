import { NoteService } from '@/core/domain/services/note.service';
import { PrismaNoteRepository } from '@/core/infrastructure/repositories/prisma-note.repository';
import { createModule } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '../types';

export function createNoteModule() {
  const noteModule = createModule();

  noteModule.bind(DI_SYMBOLS.NoteRepository).toClass(PrismaNoteRepository, [DI_SYMBOLS.SentryCrashReporterRepository]);
  noteModule.bind(DI_SYMBOLS.NoteService).toClass(NoteService, [DI_SYMBOLS.NoteRepository]);

  return noteModule;
}
