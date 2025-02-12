'use client';

import { Note } from '@/core/domain/entities/note.entity';
import { useQueryState } from 'nuqs';

type NoteNavigationProps = {
  userNotes: Note[];
};

export const NoteNavigation = ({ userNotes }: NoteNavigationProps) => {
  const [_, setSlug] = useQueryState('slug', {
    shallow: false,
  });

  return (
    <div className="min-h-32 w-[30%] rounded-sm border p-4">
      <nav className="space-y-2">
        {userNotes.map(note => (
          <div
            key={note.id}
            className="cursor-pointer text-sm text-muted-foreground hover:underline"
            onClick={() => setSlug(note.slug)}
          >
            {note.slug}
          </div>
        ))}
      </nav>
    </div>
  );
};
