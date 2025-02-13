export class RepositoryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RepositoryError';
  }
}

export class DatabaseConnectionError extends RepositoryError {
  constructor(details: string) {
    super(`Database connection failed: ${details}`);
    this.name = 'DatabaseConnectionError';
  }
}
