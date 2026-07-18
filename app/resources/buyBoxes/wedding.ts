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
           highlight: true,
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
  
  
];
