'use client';

import { Note } from '@/core/domain/entities/note.entity';
import { Button } from '@/core/presentation/components/common/ui/button';
import { useAction } from 'next-safe-action/hooks';

import { deleteNoteAction } from '../actions/delete-note-actions';

type NoteDeleteProps = {
  note: Note | null;
};

export const NoteDelete = ({ note }: NoteDeleteProps) => {
  const { execute, result } = useAction(deleteNoteAction);

  if (!note?.id) return null;

  return (
    <Button variant={'destructive'} onClick={() => execute({ id: note.id })}>
      {result.serverError ? result.serverError : 'Delete'}
    </Button>
  );
};
