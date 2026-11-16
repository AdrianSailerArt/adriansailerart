import type { Plan } from '~/types';

/** Promo-Angebot für Bands, erscheint als Preisbox und schema.org Offer auf der Seite Bandfotografie */
export const bandPlans: Array<Plan> = [
    {
        name: 'Band-Promo-Shooting',
        price: 500,
        priceFrom: true,
        description: 'Bandfotos für Promotion, Presse und Social Media, im Studio in Sexau oder an einer Location in ganz Deutschland. Preis nach Aufwand und Umfang.',
        features: ['Konzept und Location-Planung', 'Shooting im Studio oder on Location', 'Licht mit Elinchrom-Blitzen', 'bearbeitete Bandfotos', 'volle Nutzungsrechte bei Namensnennung']
    }
];
