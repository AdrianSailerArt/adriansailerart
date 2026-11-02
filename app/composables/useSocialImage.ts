/**
 * Setzt das Vorschaubild für WhatsApp, Instagram, Facebook & Co.
 * Das Foto wird auf 1200×630 (empfohlenes OG-Format) zugeschnitten
 * und beim Generieren mit vorgerendert.
 */
export const useSocialImage = (src: string, alt: string) => {
    const img = useImage();
    const site = useSiteConfig();

    const path = img(src, {
        width: 1200,
        height: 630,
        fit: 'cover',
        format: 'jpeg',
        quality: 80
    });

    const url = new URL(path, site.url).href;

    useSeoMeta({
        ogImage: url,
        ogImageWidth: 1200,
        ogImageHeight: 630,
        ogImageAlt: alt,
        ogImageType: 'image/jpeg',
        twitterImage: url,
        twitterImageAlt: alt,
        twitterCard: 'summary_large_image'
    });
};
