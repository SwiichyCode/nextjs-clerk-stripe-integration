import { Note } from '@/core/domain/entities/note.entity';

type NoteDisplayProps = {
  note: Note | null;
};

export const NoteDisplay = ({ note }: NoteDisplayProps) => {
  if (!note?.id) return null;

  return <div className="min-h-32 w-[70%] rounded-sm border p-4">{note.content}</div>;
};
