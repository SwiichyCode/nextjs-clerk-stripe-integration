'use client';

import { Button } from '@/core/presentation/components/common/ui/button';
import { useAction } from 'next-safe-action/hooks';

import { deleteNoteAction } from '../actions/delete-note-actions';

type NoteDeleteProps = {
  id: string;
};

export const NoteDelete = ({ id }: NoteDeleteProps) => {
  const { execute, result } = useAction(deleteNoteAction);

  return (
    <Button variant={'destructive'} onClick={() => execute({ id })}>
      {result.serverError ? result.serverError : 'Delete'}
    </Button>
  );
};
