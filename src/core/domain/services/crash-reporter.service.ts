import { CrashReporterRepository } from '@/core/domain/ports/crash-reporter.repository';

export class CrashReporterService {
  constructor(private readonly crashReporterRepository: CrashReporterRepository) {}

  report(error: any, context?: Record<string, any>) {
    this.crashReporterRepository.report(error, context);
  }
}
