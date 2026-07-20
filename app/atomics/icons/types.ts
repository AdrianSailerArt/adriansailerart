import type { icons } from './svg';
import type { Spacing } from '@/styles/spacing';
import { type ColorName } from '@/styles/colors';

export type IconColor =
    | Extract<ColorName, 'primary' | 'success' | 'error' | 'info' | 'warning'>
    | 'standard'
    | 'gray'
    | 'lightGray'
    | 'black'
    | 'white'
    | 'inherit';

type IconSizes = Exclude<Spacing, 'auto' | 'none'>;

export type IconProps = {
    name: keyof typeof icons;
    size?: IconSizes;
    color?: IconColor;
};
