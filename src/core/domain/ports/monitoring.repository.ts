export interface MonitoringAdapter {
  captureException(error: Error, context?: Record<string, any>): void;
}
