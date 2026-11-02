export type Contact = {
    tel: string;
    mail: string;
    instagram: string;
    address: {
        street: string;
        city: string;
    };
};

export const contactInformation: Contact = {
    tel: '+49176 78389036',
    mail: 'adriansailer@me.com',
    instagram: 'https://www.instagram.com/adriansailerart/',
    address: {
        street: 'Waldkircher Strasse 32',
        city: '79350 Sexau'
    }
};
