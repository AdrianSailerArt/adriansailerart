import type { PhotoSpot } from '~/types';

/**
 * Beschreibt die Fotospots einer Seite als schema.org `TouristAttraction` mit Koordinaten,
 * damit Google und KI-Assistenten die Orte zuordnen können. Ersteller der Seite ist das Unternehmen.
 */
export const usePhotoSpotSchema = (spots: Array<PhotoSpot>) => {
    const { url } = useSiteConfig();
    const base = url.replace(/\/$/, '');
    const pageUrl = `${base}${useRoute().path.replace(/\/?$/, '/')}`;

    useSchemaOrg(
        spots.map((spot) => ({
            '@type': 'TouristAttraction',
            name: spot.name,
            description: spot.description,
            geo: { '@type': 'GeoCoordinates', latitude: spot.latitude, longitude: spot.longitude },
            address: { '@type': 'PostalAddress', addressLocality: spot.locality, addressCountry: 'DE' },
            ...(spot.image ? { image: `${base}${encodeURI(spot.image)}` } : {}),
            subjectOf: { '@id': `${pageUrl}#webpage` }
        }))
    );
};
