export type MediumReference = {
    id: string;
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
