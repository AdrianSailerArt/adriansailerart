/**
 * Optimierte Bild-URL (WebP, skaliert) für Stellen ohne <NuxtImg>,
 * z. B. CSS-Hintergründe. Wird beim Generieren mit vorgerendert.
 */
export const useOptimizedImage = () => {
    const img = useImage();

    return (src: string, width = 1920) =>
        img(src, { format: 'webp', quality: 80, width });
};
