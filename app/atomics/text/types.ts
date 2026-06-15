import type { ColorName } from '@/styles/colors';
import type { FontStyles, HeadlineStyles } from '@/styles/fontTypes';

export type TextColor =
    | Extract<ColorName, 'primary' | 'success' | 'error' | 'info'>
    | 'standard'
    | 'gray'
    | 'white'
    | 'inherit';

export type TextVariant = keyof typeof FontStyles | keyof typeof HeadlineStyles;

export type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextType = {
    variant?: TextVariant;
    as?: keyof Pick<HTMLElementTagNameMap, 'span' | 'p' | 'b' | 'div' | 'strong'> | HeadingAs;
    color?: TextColor;
};
