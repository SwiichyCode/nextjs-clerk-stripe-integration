export interface MonitoringAdapter {
  captureException(error: any, context?: Record<string, any>): void;
}
