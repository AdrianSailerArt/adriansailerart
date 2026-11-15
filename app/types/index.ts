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
};

export type ProcessStep = {
    title: string;
    description: string;
};

export type FaqEntry = {
    question: string;
    answer: string;
};
