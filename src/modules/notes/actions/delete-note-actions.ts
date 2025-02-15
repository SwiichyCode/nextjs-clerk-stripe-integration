'use server';

import { authActionClient } from '@/core/presentation/config/libs/next-safe-action';
import { revalidatePath } from 'next/cache';

import { getInjection } from '../../../../dependency_injection/container';
import { DeleteNoteSchema } from '../forms/note-delete.schema';

export const deleteNoteAction = authActionClient.schema(DeleteNoteSchema).action(async ({ parsedInput }) => {
  const noteService = getInjection('NoteService');

  try {
    await noteService.deleteNote(parsedInput.id);
    revalidatePath('/notes');
  } catch (error) {
    throw error;
  }
});
