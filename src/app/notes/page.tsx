import { loadSearchParams } from '@/core/presentation/config/libs/nuqs';
import { NoteCard } from '@/core/presentation/modules/notes/components/note-card';
import { auth } from '@clerk/nextjs/server';
import type { SearchParams } from 'nuqs/server';

import { getInjection } from '../../../dependency_injection/container';

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function NotesPage({ searchParams }: PageProps) {
  const session = await auth();
  const { slug } = await loadSearchParams(searchParams);

  // const noteService = container.resolve<NoteService>(TOKENS.NoteService);

  // const userNotes = await noteService.getUserNotes(session.userId!);
  // const noteBySlug = await noteService.getNoteBySlug(slug ?? userNotes[0].slug);

  const noteService = getInjection('NoteService');
  const userNotes = await noteService.getUserNotes(session.userId!);
  const noteBySlug = await noteService.getNoteBySlug(slug ?? userNotes[0]?.slug);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <NoteCard userNotes={userNotes} note={noteBySlug} />
    </div>
  );
}
