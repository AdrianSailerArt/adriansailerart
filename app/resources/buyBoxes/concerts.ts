import type { Plan } from '~/types';

/** Promo-Angebot für Bands, erscheint als schema.org Offer auf der Konzertseite */
export const concertPlans: Array<Plan> = [
    {
        name: 'Band-Promo-Shooting',
        price: 500,
        priceFrom: true,
        description: 'Bandfotos für Promotion, Presse und Social Media, im Studio in Sexau oder an einer Location, die zur Band passt. Preis je nach Aufwand.',
        features: ['Konzept und Location-Planung', 'Shooting im Studio oder on Location', 'bearbeitete Bandfotos']
    }
];
