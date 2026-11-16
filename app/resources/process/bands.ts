import type { ProcessStep } from '~/types';

/** Ablauf eines Promo-Shootings für Bands */
export const bandProcess: Array<ProcessStep> = [
    {
        title: 'Anfrage',
        description: 'Schreibt mir, wofür ihr die Bilder braucht: Album, Tour, Pressekit oder Social Media, und wo ihr herkommt.'
    },
    {
        title: 'Konzept',
        description: 'Wir sprechen über Stil, Outfits und Location, gern mit Referenzbildern. Danach bekommt ihr ein Angebot nach Aufwand und Umfang.'
    },
    {
        title: 'Shooting',
        description: 'Im Studio in Sexau oder an eurer Location, irgendwo in Deutschland. Ich kümmere mich um Licht und Aufbau, ihr um die Haltung.'
    },
    {
        title: 'Bilder',
        description: 'Ihr bekommt eure bearbeiteten Bandfotos mit vollen Nutzungsrechten, fertig für Presse, Plakate und Social Media.'
    }
];
