import { Button } from '@/core/presentation/components/common/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/core/presentation/components/common/ui/dialog';

import { NoteForm } from '../forms/note-form';

export const NoteDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[15%]">Create note</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new note</DialogTitle>
          <DialogDescription>Add a new note to your collection. Fill in the information below.</DialogDescription>
        </DialogHeader>

        <NoteForm />
      </DialogContent>
    </Dialog>
  );
};
