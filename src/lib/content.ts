/**
 * Content helpers
 * Small wrappers that fetch a collection entry for a locale.
 * Single-file collections use the locale as their id (pt.md → "pt");
 * rooms use "<locale>/<room>" (rooms/pt/studio.md → "pt/studio").
 */
import { getCollection, getEntry } from 'astro:content';
import type { Locale } from '../i18n';

type SingleCollection = 'home' | 'roomsPage' | 'services' | 'location' | 'faq' | 'book';

export async function getLocaleEntry<C extends SingleCollection>(collection: C, lang: Locale) {
  const entry = await getEntry(collection, lang);
  if (!entry) throw new Error(`Missing src/content/${collection}/${lang}.md`);
  return entry;
}

/** Rooms for a locale, sorted by `order`, each with its locale-independent key */
export async function getRooms(lang: Locale) {
  const rooms = await getCollection('rooms', (entry) => entry.id.startsWith(`${lang}/`));
  return rooms
    .sort((a, b) => a.data.order - b.data.order)
    .map((entry) => ({ ...entry, key: entry.id.split('/')[1] }));
}
