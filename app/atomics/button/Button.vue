<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { colorMap, type ButtonType } from './types';
import Text from '@/atomics/text/Text.vue';

const props = withDefaults(defineProps<ButtonType>(), {
    color: 'primary',
    variant: 'standard',
    fluid: false,
    disabled: false,
});

const attrs = useAttrs();


const classes = computed(() => {
    const color = colorMap[props.color];

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

    if (props.fluid) {
        cls.push('w-full');
    }

    if (props.disabled) {
        cls.push('opacity-50', 'cursor-not-allowed');
    } else {
        cls.push('cursor-pointer');
    }

    switch (props.variant) {
        case 'text':
            cls.push(
                'bg-transparent',
                color.text
            );

            if (!props.disabled) {
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

            if (!props.disabled) {
                cls.push(color.hoverBg);
            }

            break;

        default:
            cls.push(
                color.bg,
                'text-white'
            );

            if (!props.disabled) {
                cls.push(
                    'hover:opacity-90',
                    'button-standard-effect'
                );
            }
    }

    return cls;
});
</script>

<template>
    <button
        v-bind="attrs"
        :disabled="disabled"
        :class="classes"
    >
        <Text
            as="span"
            variant="caption"
            color="inherit"
            class="relative z-10 inline-flex items-center font-bold"
        >
            <slot />
        </Text>
    </button>
</template>

<style scoped>
.button-standard-effect::after {
    content: '';
    position: absolute;
    border: 1px solid var(--color-black);
    bottom: var(--spacing-small);
    left: var(--spacing-small);
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border-radius: var(--radius-none);
    pointer-events: none;
    transition: all 200ms ease-in-out;
}

.button-standard-effect:hover::after {
    bottom: 2px;
    left: 2px;
}

.button-standard-effect:focus::after {
    outline: 0;
}
</style>