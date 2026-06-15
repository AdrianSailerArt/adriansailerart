export const radius = {
    none: '0px',
    minimal: '4px',
    standard: '8px',
    rounded: '16px',
    full: '32px',
    circle: '64px'
} as const;

export type Radius = keyof typeof radius;
