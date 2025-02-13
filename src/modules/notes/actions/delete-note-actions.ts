'use server';

import { NoteService } from '@/core/domain/ports/note.repository';
import { TOKENS, container } from '@/core/infrastructure/config/container';
import { authActionClient } from '@/core/presentation/config/libs/next-safe-action';
import { revalidatePath } from 'next/cache';

import { DeleteNoteSchema } from '../forms/note-delete.schema';

export const deleteNoteAction = authActionClient.schema(DeleteNoteSchema).action(async ({ parsedInput }) => {
  const noteService = container.resolve<NoteService>(TOKENS.NoteService);

  try {
    await noteService.deleteNote(parsedInput.id);
    revalidatePath('/notes');
  } catch (error) {
    throw error;
  }
});
