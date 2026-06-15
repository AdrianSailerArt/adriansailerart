
export type FontType = {
    fontSize: string;
    lineHeight: string;
    fontWeight?: string | number;
    letterSpacing?: string;
    textTransform?: string;
    fontFamily?: string;
    fontStyle?: string;
    textDecoration?: string;
};

export type FontStylesType = {
    body: FontType;
    bodyMedium: FontType;
    bodySemibold: FontType;
    bodyBold: FontType;
    bodyItalic: FontType;
    bodyUnderline: FontType;
    bodyBoldItalic: FontType;
    overline: FontType;
    linkText: FontType;
    title: FontType;
    price: FontType;
    subTitle: FontType;
    caption: FontType;
    label: FontType;
};

export type HeadingLevel = 'displayLarge' | 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadlineStylesType = Record<HeadingLevel, FontType>;


const bodyBase: FontType = {
    fontSize: 'var(--body-base-font-size)',
    lineHeight: 'var(--body-base-line-height)',
    fontWeight: 'var(--body-base-font-weight)'
};

export const FontStyles: FontStylesType = {
    body: {
        ...bodyBase
    },
    bodyMedium: {
        ...bodyBase,
        fontWeight: 500
    },
    bodySemibold: {
        ...bodyBase,
        fontWeight: 600
    },
    bodyBold: {
        ...bodyBase,
        fontWeight: 700
    },
    bodyItalic: {
        ...bodyBase,
        fontStyle: 'italic'
    },
    bodyUnderline: {
        ...bodyBase,
        textDecoration: 'underline'
    },
    bodyBoldItalic: {
        ...bodyBase,
        fontWeight: 700,
        fontStyle: 'italic'
    },
  
    overline: {
        ...bodyBase,
        fontSize: 'var(--dashboard-overline-font-size)',
        lineHeight: 'var(--dashboard-overline-line-height)',
        letterSpacing: 'var(--dashboard-overline-letter-spacing)',
        fontWeight: 'var(--dashboard-overline-font-weight)',
        textTransform: 'uppercase'
    },

    linkText: {
        fontWeight: 'var(--link-text-font-weight)',
        fontSize: 'var(--link-text-font-size)',
        lineHeight: 'var(--link-text-line-height)',
        letterSpacing: 'var(--link-text-letter-spacing)'
    },
    title: {
        fontWeight: 'var(--title-font-weight)',
        fontSize: 'var(--title-font-size)',
        lineHeight: 'var(--title-line-height)',
        letterSpacing: 'var(--title-letter-spacing)'
    },
    price: {
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: '1.5rem'
    },
    subTitle: {
        fontWeight: 'var(--subtitle-font-weight)',
        fontSize: 'var(--subtitle-font-size)',
        lineHeight: 'var(--subtitle-line-height)',
        letterSpacing: 'var(--subtitle-letter-spacing)'
    },
    caption: {
        fontWeight: 'var(--caption-font-weight)',
        fontSize: 'var(--caption-font-size)',
        lineHeight: 'var(--caption-line-height)',
        letterSpacing: 'var(--caption-letter-spacing)'
    },
    label: {
        fontWeight: 'var(--label-font-weight)',
        fontSize: 'var(--label-font-size)',
        lineHeight: 'var(--label-line-height)',
        letterSpacing: 'var(--label-letter-spacing)'
    }
} as const;

export const HeadlineStyles: HeadlineStylesType = {
    displayLarge: {
        fontWeight: 'var(--font-weight-heading)',
        fontSize: 'var(--display-large-font-size)',
        lineHeight: 'var(--display-large-line-height)'
    },
    display: {
        fontWeight: 'var(--font-weight-heading)',
        fontSize: 'var(--display-font-size)',
        lineHeight: 'var(--display-line-height)'
    },
    h1: {
        fontWeight: 'var(--font-weight-heading)',
        fontSize: 'var(--h1-font-size)',
        lineHeight: 'var(--h1-line-height)',
        letterSpacing: 'var(--h1-letter-spacing)'
    },
    h2: {
        fontWeight: 'var(--font-weight-heading)',
        fontSize: 'var(--h2-font-size)',
        lineHeight: 'var(--h2-line-height)',
        letterSpacing: 'var(--h2-letter-spacing)'
    },
    h3: {
        fontWeight: 'var(--font-weight-heading)',
        fontSize: 'var(--h3-font-size)',
        lineHeight: 'var(--h3-line-height)',
        letterSpacing: 'var(--h3-letter-spacing)'
    },
    h4: {
        fontWeight: 'var(--font-weight-heading)',
        fontSize: 'var(--h4-font-size)',
        lineHeight: 'var(--h4-line-height)',
        letterSpacing: 'var(--h4-letter-spacing)'
    },
    h5: {
        fontWeight: 'var(--font-weight-heading)',
        fontSize: 'var(--h5-font-size)',
        lineHeight: 'var(--h5-line-height)',
        letterSpacing: 'var(--h5-letter-spacing)'
    },
    h6: {
        fontWeight: 'var(--font-weight-heading)',
        fontSize: 'var(--h6-font-size)',
        lineHeight: 'var(--h6-line-height)',
        letterSpacing: 'var(--h6-letter-spacing)'
    }
} as const;
