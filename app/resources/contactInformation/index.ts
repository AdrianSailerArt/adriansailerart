export type Contact = {
    /** Zum Anzeigen */
    tel: string;
    /** Für tel:-Links und Schema.org (E.164) */
    telLink: string;
    whatsapp: string;
    mail: string;
    instagram: string;
    address: {
        street: string;
        city: string;
    };
};

export const contactInformation: Contact = {
    tel: '0176 78389036',
    telLink: '+4917678389036',
    whatsapp: 'https://wa.me/4917678389036',
    mail: 'adriansailer@me.com',
    instagram: 'https://www.instagram.com/adriansailerart/',
    address: {
        street: 'Waldkircher Strasse 32',
        city: '79350 Sexau'
    }
};
