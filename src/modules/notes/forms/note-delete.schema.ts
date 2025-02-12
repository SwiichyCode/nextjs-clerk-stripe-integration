import { z } from 'zod';

export const DeleteNoteSchema = z.object({
  id: z.string(),
});
