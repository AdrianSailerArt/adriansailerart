import type { Plan } from '~/types';

/** Portrait-Angebot, erscheint als schema.org Offer auf der Portraitseite */
export const portraitPlans: Array<Plan> = [
    {
        name: 'Portrait-Shooting',
        price: 149,
        priceFrom: true,
        description: 'Portrait für Privatpersonen und Paare, im Studio in Sexau oder draußen im Schwarzwald.',
        features: ['ca. 1 Stunde', 'ca. 10 bearbeitete Bilder', 'Bilder nach 1 bis 2 Wochen']
    }
];
