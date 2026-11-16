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

/** Vorauswahl des Themas über ?topic= in Links, z. B. /contact/?topic=band (englisch wie alle URLs) */
export const inquiryTopicSlugs: Record<string, string> = {
    wedding: 'Hochzeit',
    portrait: 'Portrait',
    band: 'Konzert / Band',
    cosplay: 'Cosplay'
};

/** Hochzeitspakete aus der Preisübersicht plus individuelles Paket */
export const inquiryPackages = [...weddingPlans.map((plan) => plan.name), 'Individuell'];
