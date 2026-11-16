import type { PhotoSpot } from '~/types';

/** Fotospots in Freiburg, Reihenfolge wie auf der Seite /photo-spots/freiburg/ */
export const freiburgSpots: Array<PhotoSpot> = [
    {
        name: 'Kanonenplatz auf dem Schlossberg',
        description: 'Aussichtspunkt über der Altstadt mit Blick auf das Münster, am besten zur blauen Stunde.',
        locality: 'Freiburg im Breisgau',
        latitude: 47.9938,
        longitude: 7.8582,
        image: '/nature/freiburg nacht.jpg'
    },
    {
        name: 'Theater Freiburg und Platz der Alten Synagoge',
        description: 'Sandsteinfassade und offener Platz, besonders stimmungsvoll bei Regen und am Abend.',
        locality: 'Freiburg im Breisgau',
        latitude: 47.9945,
        longitude: 7.846,
        image: '/nature/Theater Freiburg.jpg'
    },
    {
        name: 'Münsterplatz und Altstadt',
        description: 'Münster, Historisches Kaufhaus, Bächle, Martinstor und Schwabentor auf wenigen hundert Metern.',
        locality: 'Freiburg im Breisgau',
        latitude: 47.9956,
        longitude: 7.8528
    }
];
