export interface CrashReporterRepository {
  report(error: any, context?: Record<string, any>): void;
}
