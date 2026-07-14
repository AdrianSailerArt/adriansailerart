import { createMailtoCta } from '~/helpers/ctaMail';
import type { Plan } from '~/types';



export const weddingPlans: Array<Plan> = [
    {
        name: 'Standesamt',
        price: 490,
        description:
            'Ideal für standesamtliche Trauungen oder eine kurze Begleitung der wichtigsten Momente.',
        features: [
            'ca. 2 Stunden Begleitung',
            'Vorgespräch',
            'Professionelle Bildbearbeitung',
            'Mind. 80 bearbeitete Fotos',
            'Online-Galerie',
            'Private Nutzungsrechte'
        ],
        cta: createMailtoCta('Standesamt')
    },
    {
        name: 'Classic',
        price: 1290,
        description:
            'Die perfekte Wahl für die meisten Hochzeiten – von der Trauung bis zum Sektempfang.',
        features: [
            'ca. 6 Stunden Begleitung',
            'Persönliches Kennenlerngespräch',
            'Professionelle Bildbearbeitung',
            'Mind. 350 bearbeitete Fotos',
            'Online-Galerie',
            'Gruppen- & Paarfotos',
            'Private Nutzungsrechte'
        ],
        cta: createMailtoCta('Classic')
    },
    {
        name: 'Premium',
        price: 1990,
        highlight: true,
        description:
            'Eure Geschichte vom Getting Ready bis zur ausgelassenen Feier – authentisch und emotional dokumentiert.',
        features: [
            'ca. 10 Stunden Begleitung',
            'Kennenlerngespräch',
            'Professionelle Bildbearbeitung',
            'Mind. 600 bearbeitete Fotos',
            'Online-Galerie',
            'Getting Ready',
            'First Look',
            'Paarshooting',
            'Gruppenfotos',
            'Private Nutzungsrechte'
        ],
        cta: createMailtoCta('Premium')
    },
    {
        name: 'Exclusive',
        price: 2890,
        description:
            'Für Paare, die ihren gesamten Hochzeitstag ohne Kompromisse festhalten möchten.',
        features: [
            'Bis zu 12 Stunden Begleitung',
            'Persönliches Vorgespräch',
            'Professionelle Bildbearbeitung',
            'Mind. 800 bearbeitete Fotos',
            'Online-Galerie',
            'Getting Ready bis Party',
            'Drohnenaufnahmen (wenn möglich)',
            'After-Wedding-Shooting',
            'Highlight-Slideshow',
            'Private Nutzungsrechte'
        ],
        cta: createMailtoCta('Exclusive')
    },
    {
        name: 'Individuell',

        price: 0,

        description:
            'Eure Hochzeit passt in keines der Pakete? Gerne erstelle ich euch ein individuelles Angebot – perfekt abgestimmt auf eure Wünsche, euren Zeitplan und eure Location.',

        features: [
            'Individuelle Begleitungsdauer',

            'Persönliche Beratung',

            'Flexibler Leistungsumfang',

            'Destination Weddings möglich',

            'Zusätzliche Shootings',

            'Drohnenaufnahmen (wenn möglich)',

            'Fotoalben & hochwertige Prints',

            'Persönliches Angebot'
        ],
        cta: createMailtoCta('Individuell')
    }
];
