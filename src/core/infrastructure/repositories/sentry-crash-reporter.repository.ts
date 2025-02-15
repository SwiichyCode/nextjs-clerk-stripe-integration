import { CrashReporterRepository } from '@/core/domain/ports/crash-reporter.repository';
import * as Sentry from '@sentry/nextjs';

export class SentryCrashReporterRepository implements CrashReporterRepository {
  report(error: any, context?: Record<string, any>) {
    Sentry.captureException(error, {
      extra: context,
    });
  }
}
