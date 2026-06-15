export const spacing = {
    none: '0rem',
    auto: 'auto',
    small: '0.25rem',
    small2: '0.5rem',
    small3: '0.75rem',
    small4: '1rem',
    small5: '1.25rem',
    medium: '1.5rem',
    medium2: '2rem',
    medium3: '2.5rem',
    medium4: '3rem',
    large: '4rem',
    large2: '5rem',
    large3: '6rem',
    large4: '9.5rem',
    large5: '10rem',
    large6: '11rem'
} as const;

export type Spacing = keyof typeof spacing;
