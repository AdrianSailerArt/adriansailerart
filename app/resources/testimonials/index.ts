/**
 * Rezensionen aus dem Google-Unternehmensprofil, Text unverändert übernommen.
 * Namen gekürzt (Vorname + Initial), Firmen mit vollem Namen.
 * Neue Rezensionen oben ergänzen und `googleRating` aktualisieren.
 */
export type Testimonial = {
    author: string;
    text: string;
    rating: number;
    /** Wie Google es anzeigt, z. B. "2019" */
    year: string;
};

export const googleRating = {
    average: 4.7,
    count: 13,
    /** Stand der Zahlen oben */
    checkedAt: 'November 2026'
};

export const testimonials: Array<Testimonial> = [
    {
        author: 'Bernd W.',
        rating: 5,
        year: '2025',
        text: 'Adrian hat ein feines Gespür für Fotografie. Seine Bilder wirken durchdacht und gleichzeitig intuitiv – das zeigt sich auch in dem Kalender, den ich von ihm bekommen habe. Jeder Monat bringt eine neue Stimmung, eingefangen mit viel Gefühl für Licht und Komposition. Man merkt, dass hier jemand mit Leidenschaft hinter der Kamera steht.'
    },
    {
        author: 'Elvira F.',
        rating: 5,
        year: '2021',
        text: 'Die Zusammenarbeit macht jedes mal aufs neue Spaß, die Ergebnisse sind schnell da und übertreffen stets die Erwartungen;) Adrian weiß auf jeden Fall mit Licht und Schatten umzugehen!'
    },
    {
        author: 'Eightrocks Photography',
        rating: 5,
        year: '2020',
        text: 'Adrian Sailer ist ein absoluter Profi mit dem Gespür für tolle Fotos. Er kennt sich mit Licht aus und weiß sofort wie er alles und jeden perfekt ablichtet. Es ist eine Freude mit ihm zu arbeiten.'
    }
];
