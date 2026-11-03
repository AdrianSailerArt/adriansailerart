/**
 * Breite der Bilder in der Vollbild-Ansicht. Diese Bilder stehen erst nach
 * einem Klick im DOM, deshalb rendert nuxt.config.ts sie beim Generieren
 * gezielt mit vor – sonst gäbe es auf GitHub Pages nur 404.
 */
export const FULLSCREEN_IMAGE_WIDTH = 1920;

/** Ordner in /public, deren Bilder in Galerien (und damit im Vollbild) auftauchen */
export const GALLERY_IMAGE_DIRS = ['concert', 'cosplay', 'hochzeit', 'people', 'regen', 'tracht'];
