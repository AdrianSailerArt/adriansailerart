
export const text = {
    xs: '0.75rem' /* 12px */,
    sm: '0.875rem' /* 14px */,
    base: '1rem' /* 16px */,
    lg: '1.125rem' /* 18px */,
    xl: '1.25rem' /* 20px */,
    '2xl': '1.375rem' /* 22px */,
    '3xl': '1.625rem' /* 26px */,
    '4xl': '2rem' /* 32px */,
    '5xl': '2.375rem' /* 38px */,
    '6xl': '3rem' /* 48px */,
    '7xl': '3.5rem' /* 56px */,
    '8xl': '4rem' /* 64px */
} as const;

export type Text = keyof typeof text;
