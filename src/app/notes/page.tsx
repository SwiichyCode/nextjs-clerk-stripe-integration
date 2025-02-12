import { NoteService } from '@/core/domain/ports/note.repository';
import { TOKENS, container } from '@/core/infrastructure/config/container';

export default async function NotesPage() {
  const noteService = container.resolve<NoteService>(TOKENS.NoteService);
  const notes = await noteService.getUserNotes('123');

  console.log(notes);

  return <div>Notes</div>;
}
