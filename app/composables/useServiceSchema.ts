/**
 * Beschreibt die Leistung einer Seite (z. B. Hochzeitsfotografie) für Suchmaschinen
 * als schema.org `Service`, verknüpft mit dem Unternehmen aus nuxt.config.ts.
 */
export const useServiceSchema = (name: string, description: string) => {
    const { url } = useSiteConfig();
    const base = url.replace(/\/$/, '');

    useSchemaOrg([
        {
            '@type': 'Service',
            name,
            serviceType: name,
            description,
            provider: { '@id': `${base}/#identity` },
            areaServed: ['Freiburg im Breisgau', 'Emmendingen', 'Kaiserstuhl', 'Schwarzwald'],
            availableLanguage: 'de'
        }
    ]);
};
