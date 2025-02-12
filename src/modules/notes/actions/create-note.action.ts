'use server';

import { NoteService } from '@/core/domain/ports/note.repository';
import { TOKENS, container } from '@/core/infrastructure/config/container';
import { authActionClient } from '@/core/presentation/config/libs/next-safe-action';
import { revalidatePath } from 'next/cache';

import { CreateNoteSchema } from '../forms/note-form.schema';

export const createNoteAction = authActionClient.schema(CreateNoteSchema).action(async ({ parsedInput, ctx }) => {
  const noteService = container.resolve<NoteService>(TOKENS.NoteService);

  try {
    await noteService.createNote({ ...parsedInput, userId: ctx.userId });
    revalidatePath('/notes');
  } catch (error) {
    throw error;
  }
});
