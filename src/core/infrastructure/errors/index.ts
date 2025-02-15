export class DatabaseOperationError extends Error {
  constructor(details: string) {
    super(`Database operation failed: ${details}`);
    this.name = 'DatabaseOperationError';
  }
}
