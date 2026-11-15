import { weddingPlans } from '~/resources/buyBoxes/wedding';

/** Auswahl „Worum geht es?“ im Anfrageformular */
export const inquiryTopics = [
    'Hochzeit',
    'Portrait',
    'Regenshooting',
    'Trachtenportrait',
    'TFP-Shooting',
    'Konzert / Band',
    'Cosplay',
    'Sonstiges'
];

/** Hochzeitspakete aus der Preisübersicht plus individuelles Paket */
export const inquiryPackages = [...weddingPlans.map((plan) => plan.name), 'Individuell'];
