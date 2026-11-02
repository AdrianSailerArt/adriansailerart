import { computed } from 'vue';
import { colorMap, type ButtonColor, type ButtonVariant } from './types';

type ButtonClassOptions = {
    color: ButtonColor;
    variant: ButtonVariant;
    fluid: boolean;
    disabled?: boolean;
};

/**
 * Klassen für die Button-Optik, geteilt von Button.vue und Link.vue
 */
export const useButtonClasses = (options: () => ButtonClassOptions) =>
    computed(() => {
        const { color: colorName, variant, fluid, disabled } = options();
        const color = colorMap[colorName];

        const cls = [
            'relative',
            'inline-flex',
            'items-center',
            'justify-center',
            'px-small4',
            'py-small3',
            'rounded-none',
            '-rotate-1',
            'transition-all',
            'duration-200',
            'select-none',
            'h-normal',
        ];

        if (fluid) {
            cls.push('w-full');
        }

        if (disabled) {
            cls.push('opacity-50', 'cursor-not-allowed');
        } else {
            cls.push('cursor-pointer');
        }

        switch (variant) {
            case 'text':
                cls.push(
                    'bg-transparent',
                    color.text
                );

                if (!disabled) {
                    cls.push('hover:underline');
                }

                break;

            case 'outlined':
                cls.push(
                    'bg-transparent',
                    color.text,
                    'border-2',
                    color.border
                );

                if (!disabled) {
                    cls.push(color.hoverBg);
                }

                break;

            default:
                cls.push(
                    color.bg,
                    'text-white'
                );

                if (!disabled) {
                    cls.push(
                        'hover:opacity-90',
                        'button-standard-effect'
                    );
                }
        }

        return cls;
    });
