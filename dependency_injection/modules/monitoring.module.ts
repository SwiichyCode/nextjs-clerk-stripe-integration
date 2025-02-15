import { CrashReporterService } from '@/core/domain/services/crash-reporter.service';
import { SentryCrashReporterRepository } from '@/core/infrastructure/repositories/sentry-crash-reporter.repository';
import { createModule } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '../types';

export function createMonitoringModule() {
  const monitoringModule = createModule();

  monitoringModule.bind(DI_SYMBOLS.SentryCrashReporterRepository).toClass(SentryCrashReporterRepository);
  monitoringModule
    .bind(DI_SYMBOLS.CrashReporterService)
    .toClass(CrashReporterService, [DI_SYMBOLS.SentryCrashReporterRepository]);

  return monitoringModule;
}
