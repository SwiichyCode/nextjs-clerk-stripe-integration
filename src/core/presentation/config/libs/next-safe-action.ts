import { auth } from '@clerk/nextjs/server';
import { DEFAULT_SERVER_ERROR_MESSAGE, createSafeActionClient } from 'next-safe-action';

export const actionClient = createSafeActionClient({
  handleServerError(error) {
    console.error('Action error:', error.message);

    if (error instanceof Error) {
      return error.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});

export const authActionClient = actionClient.use(async ({ next }) => {
  const session = await auth();

  if (!session.userId) {
    throw new Error('Session not found!');
  }

  return next({ ctx: { userId: session.userId } });
});
