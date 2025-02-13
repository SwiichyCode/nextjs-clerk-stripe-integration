import { Note } from '@/core/domain/entities/note.entity';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/core/presentation/components/common/ui/card';

import { NoteDelete } from './note-delete';
import { NoteDialog } from './note-dialog';
import { NoteDisplay } from './note-display';
import { NoteNavigation } from './note-navigation';

type NoteCardProps = {
  userNotes: Note[];
  note: Note | null;
};

export const NoteCard = ({ userNotes, note }: NoteCardProps) => {
  console.log(note);

  return (
    <Card className="w-[780px] p-6">
      <CardHeader>
        <CardTitle>My Personal Notes</CardTitle>
        <CardDescription>Create and manage your personal notes in one place</CardDescription>
        <div className="flex gap-4">
          <NoteDialog />
          <NoteDelete note={note} />
        </div>
      </CardHeader>
      <CardContent className="flex gap-4">
        {userNotes.length > 0 && <NoteNavigation userNotes={userNotes} />}
        <NoteDisplay note={note} />
      </CardContent>
    </Card>
  );
};
