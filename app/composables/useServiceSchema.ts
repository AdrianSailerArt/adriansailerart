import type { Plan } from '~/types';

/**
 * Beschreibt die Leistung einer Seite (z. B. Hochzeitsfotografie) für Suchmaschinen
 * als schema.org `Service`, verknüpft mit dem Unternehmen aus nuxt.config.ts.
 * Mit `plans` erscheinen die Pakete samt Preis als `Offer`, damit Google und KI-Assistenten sie nennen können.
 */
export const useServiceSchema = (name: string, description: string, plans: Array<Plan> = []) => {
    const { url } = useSiteConfig();
    const base = url.replace(/\/$/, '');
    // Gleiche Schreibweise wie die Canonicals (mit Schrägstrich am Ende)
    const pageUrl = `${base}${useRoute().path.replace(/\/?$/, '/')}`;

    const offers = plans
        .filter((plan) => typeof plan.price === 'number')
        .map((plan) => ({
            '@type': 'Offer',
            name: `${name} ${plan.name}`,
            description: [plan.description, ...plan.features].join(' · '),
            price: plan.price,
            priceCurrency: 'EUR',
            url: pageUrl,
            availability: 'https://schema.org/InStock'
        }));

    useSchemaOrg([
        {
            '@type': 'Service',
            name,
            serviceType: name,
            description,
            provider: { '@id': `${base}/#identity` },
            areaServed: ['Freiburg im Breisgau', 'Emmendingen', 'Kaiserstuhl', 'Schwarzwald'],
            availableLanguage: 'de',
            ...(offers.length ? { offers } : {})
        }
    ]);
};
