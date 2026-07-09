<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { ButtonColor, ButtonType } from './types';
import Text from '@/atomics/text/Text.vue';

const props = withDefaults(defineProps<ButtonType>(), {
    color: 'primary',
    variant: 'standard',
    fluid: false,
    disabled: false
});

const attrs = useAttrs();
const isTextVariant = computed(() => props.variant === 'text');
const isOutlinedVariant = computed(() => props.variant === 'outlined');


const bgClass = computed(() => {
    if (isTextVariant.value) return 'bg-transparent';

    if (props.disabled) {
        if (isOutlinedVariant.value) return 'bg-transparent';

        return {
            primary: 'bg-primaryLightenOne',
            background: 'bg-backgroundLayer',
            transparent: 'bg-transparent'
        }[props.color];
    }

    if (isOutlinedVariant.value) return 'bg-transparent';

    return {
        primary: 'bg-primary',
        background: 'bg-backgroundLayer',
        transparent: 'bg-transparent'
    }[props.color];
});

const textClass = computed(() => {
    if (isOutlinedVariant.value || isTextVariant.value) {
        return {
            primary: 'text-primary',
            background: 'text-info',
            transparent: 'text-info'
        }[props.color];
    }

    if (props.color === 'background' || props.color === 'transparent') {
        return 'text-info';
    }

    return 'text-white';
});

const hoverClass = computed(() => {
    if (props.disabled) return '';

    if (isOutlinedVariant.value) {
        return {
            primary:
                'hover:text-primaryDarkenOne hover:border-primaryDarkenOne dark:hover:text-primaryLightenOne dark:hover:border-primaryLightenOne',
            background:
                'hover:bg-gray15 hover:border-gray30 dark:hover:bg-secondaryLightenOne dark:hover:border-secondaryLightenOne',
            transparent: 'hover:bg-gray5'
        }[props.color];
    }

    if (isTextVariant.value) {
        return {
            primary: 'hover:text-primaryDarkenOne dark:hover:text-primaryLightenOne',
            background: 'hover:text-infoDarkenOne dark:hover:text-infoLightenOne',
            transparent: 'hover:text-infoDarkenOne dark:hover:text-infoLightenOne'
        }[props.color];
    }

    const hoverMap: Record<ButtonColor, string> = {
        primary: 'hover:bg-primaryDarkenOne dark:hover:bg-primaryLightenOne',
        background: 'hover:bg-gray5 transition dark:hover:bg-secondaryLightenOne',
        transparent: 'hover:bg-gray5 dark:hover:bg-white/10'
    };

    return hoverMap[props.color];
});

const activeClass = computed(() => {
    if (props.disabled) return '';

    return 'active:opacity-90';
});

const borderClass = computed(() => {
    if (isTextVariant.value) return '';

    if (!isOutlinedVariant.value) return 'border border-2 border-transparent';

    return {
        primary: 'border border-2 border-primary',
        background: 'border border-2  border-bg-backgroundLayer',
        transparent: 'border border-2 border-transparent'
    }[props.color];
});

const fluidClass = computed(() => (props.fluid ? 'w-full' : ''));
const shapeClass = computed(() => {
    if (isTextVariant.value) return 'p-none h-auto rounded-none shadow-none';


    return 'px-small4 py-small3 h-normal rounded-br-rounded  rounded-tl-rounded shadow-inputShadow';
});
</script>

<template>
    <button
        :aria-label="ariaLabel"
        :disabled="props.disabled"
        :class="[
            'flex items-center justify-center',
            shapeClass,
            bgClass,
            textClass,
            hoverClass,
            activeClass,
            borderClass,
            fluidClass,
            props.disabled ? 'cursor-not-allowed ' : 'cursor-pointer'
        ]"
        v-bind="attrs"
    >
        <Text as="span" variant="caption" color="inherit" class="inline-flex items-center duration-500 ease-in-out">
            <slot
        /></Text>
    </button>
</template>
