export class NoteException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NoteException';
  }
}

export class NoteNotFoundException extends NoteException {
  constructor(identifier?: string) {
    super(`Note non trouvée${identifier ? ` (${identifier})` : ''}`);
    this.name = 'NoteNotFoundException';
  }
}
