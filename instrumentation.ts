export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('@/core/infrastructure/config/libs/sentry-server');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('@/core/infrastructure/config/libs/sentry-server');
  }
}
