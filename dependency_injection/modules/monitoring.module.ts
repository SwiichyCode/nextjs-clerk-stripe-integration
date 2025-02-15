import { SentryAdapter } from '@/core/infrastructure/adapters/sentry.adapter';
import { createModule } from '@evyweb/ioctopus';

import { DI_SYMBOLS } from '../types';

export function createMonitoringModule() {
  const monitoringModule = createModule();

  monitoringModule.bind(DI_SYMBOLS.MonitoringAdapter).toClass(SentryAdapter);

  return monitoringModule;
}
