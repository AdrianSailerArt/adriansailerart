import type { ColorName } from '@/styles/colors';
import type { ButtonHTMLAttributes } from 'vue';

export type ButtonColor =
    | Extract<
          ColorName,
          'primary' | 'secondary' | 'success' | 'warning' | 'info'
      >
   

export type ButtonVariant = 'standard' | 'outlined' | 'text';

export type ButtonType = {
    color?: ButtonColor;
    variant?: ButtonVariant;
    fluid?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
} & /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'disabled' | 'color'>;

type ColorMap = {
    [key in ButtonColor]: {
        bg: string;
        text: string;
        border: string;
        hoverBg: string;
    };
};
export const colorMap: ColorMap = {
    primary: {
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary',
        hoverBg: 'hover:bg-primary/5'
    },
    secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary',
        hoverBg: 'hover:bg-secondary/5'
    },
    success: {
        bg: 'bg-success',
        text: 'text-success',
        border: 'border-success',
        hoverBg: 'hover:bg-success/5'
    },
    warning: {
        bg: 'bg-warning',
        text: 'text-warning',
        border: 'border-warning',
        hoverBg: 'hover:bg-warning/5'
    },
    info: {
        bg: 'bg-info',
        text: 'text-info',
        border: 'border-info',
        hoverBg: 'hover:bg-info/5'
    }
};
