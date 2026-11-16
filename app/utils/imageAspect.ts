/**
 * Seitenverhältnis eines Galeriebilds als Inline-Style, damit der Browser den Platz
 * vor dem Laden reserviert. Die Maße liest nuxt.config.ts beim Bauen aus den Dateien.
 */
export const getImageAspectStyle = (src: string) => {
    const size = useAppConfig().imageSizes[src];

    return size ? { aspectRatio: `${size[0]} / ${size[1]}` } : undefined;
};
