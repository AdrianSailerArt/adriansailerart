export const formElementHeight = {
    normal: '2.5rem',
    compact: '2rem',
    tiny: '1.25rem'
} as const;

export type FormElementHeight = keyof typeof formElementHeight;
