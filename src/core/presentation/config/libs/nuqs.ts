import { createLoader, parseAsString } from 'nuqs/server';

export const noteSearchParams = {
  slug: parseAsString,
};

export const loadSearchParams = createLoader(noteSearchParams);
