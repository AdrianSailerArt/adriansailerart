import type { MediumReference } from "~/types";

export type EmitGalleryType = {
    imageClick: [image: MediumReference, index: number];
};

export type LayoutProps =
    | 'single' // Ein Bild (Full Width)
    | 'grid' // Standard Grid 2-3 Spalten
    | 'carousel' // Horizontales Scrolling
    | 'masonry' // Pinterest-Style (2 Spalten, unterschiedliche Höhen)
    | 'bento' // Mixed Grid (1. Bild 2x2, Rest 1x1)
    | 'feature' // Feature Image + Gallery (1. Bild groß, Rest in Grid)
    | 'waterfall'; // Cascade/Waterfall Style (neu)
