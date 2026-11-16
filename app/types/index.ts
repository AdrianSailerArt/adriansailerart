export type MediumReference = {
    id: number;
    alt?: string;
    title?: string;
    media: string;
};  
export type Plan = {
    name: string;
    price: number | string;
    description: string;
    features: Array<string>;
    highlight?: boolean;
    /** Preis ist ein Mindestpreis ("ab 149 €") */
    priceFrom?: boolean;
};

export type ProcessStep = {
    title: string;
    description: string;
};

export type FaqEntry = {
    question: string;
    answer: string;
};

/** Ein Ort zum Fotografieren, z. B. für die Fotospot-Seiten und ihr Schema */
export type PhotoSpot = {
    name: string;
    description: string;
    /** Ort, in dem der Spot liegt, z. B. „Freiburg im Breisgau“ */
    locality: string;
    latitude: number;
    longitude: number;
    image?: string;
};
