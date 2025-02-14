import { MonitoringAdapter } from '@/core/domain/ports/monitoring.repository';
import * as Sentry from '@sentry/nextjs';

export class SentryAdapter implements MonitoringAdapter {
  captureException(error: Error, context?: Record<string, any>) {
    Sentry.captureException(error, {
      extra: context,
    });
  }
}
