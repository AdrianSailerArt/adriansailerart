import type { ColorName } from '@/styles/colors';
import type { ButtonHTMLAttributes } from 'vue';

export type ButtonColor = Extract<ColorName, 'primary'> | 'background' | 'transparent';

export type ButtonVariant = 'standard' | 'outlined' | 'text' | 'pill';

export type ButtonType = {
    color?: ButtonColor;
    variant?: ButtonVariant;
    fluid?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
} & /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'disabled' | 'color'>;
