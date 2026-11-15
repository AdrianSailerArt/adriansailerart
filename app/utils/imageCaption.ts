import type { MediumReference } from '~/types';

/** Titel, die nur den Ordner wiederholen und für Besucher und Suchmaschinen nichts aussagen */
const GENERIC_TITLES = new Set(['Hochzeit', 'Regen', 'Tracht']);

/**
 * Sichtbare Bildunterschrift einer Galerie.
 * Laufnummern aus Dateinamen ("Witcher-3") fallen weg, reine Ordnernamen ("Hochzeit-5")
 * werden durch die Bildbeschreibung ersetzt.
 */
export const getImageCaption = (image: Pick<MediumReference, 'title' | 'alt'>) => {
    const title = image.title?.replace(/-\d+$/, '').trim();

    if (!title || GENERIC_TITLES.has(title)) return image.alt ?? '';

    return title;
};
