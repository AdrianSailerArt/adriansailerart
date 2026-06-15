export type Device = 'mobile' | 'tablet' | 'desktop';

/**
 * Breakpoints mapped to their minimum viewport widths.
 */
export const BREAKPOINTS = {
    xs: 0,
    ms: 640,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1536,
    '2xl': 1920,
    '3xl': 2560,
    '4xl': 3560
} as const satisfies Record<string, number>;

export type Breakpoint = keyof typeof BREAKPOINTS;

export const BREAKPOINT_TOKENS = (() => {
    const obj: Record<string, string> = {};
    for (const k in BREAKPOINTS) {
        obj[k] = BREAKPOINTS[k as Breakpoint] + 'px';
    }

    return obj as Record<Breakpoint, string>;
})();

export const pickDevice = (width: number): Device => {
    if (width >= BREAKPOINTS.xl) return 'desktop';

    if (width >= BREAKPOINTS.md) return 'tablet';

    return 'mobile';
};
