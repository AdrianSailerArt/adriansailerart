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
const isStandardVariant = computed(() => props.variant === 'standard');

const bgClass = computed(() => {
    if (isTextVariant.value || isOutlinedVariant.value) return 'bg-transparent';
    
    if (props.disabled) {
        return `bg-${props.color}`;
    }

    return `bg-${props.color}`;
});

const textClass = computed(() => {
    if (isOutlinedVariant.value || isTextVariant.value) {
        return `text-${props.color}`;
    }
    return 'text-white';
});

const borderClass = computed(() => {
    if (isTextVariant.value) return '';
    
    if (isOutlinedVariant.value) {
        return `border-2 border-${props.color}`;
    }
    
    return '';
});

const hoverClass = computed(() => {
    if (props.disabled) return '';

    if (isOutlinedVariant.value) {
        return `hover:bg-${props.color}/5`;
    }

    if (isTextVariant.value) {
        return `hover:underline`;
    }

    return `hover:opacity-90`;
});

const fluidClass = computed(() => (props.fluid ? 'w-full' : ''));

const shapeClass = computed(() => {
    if (isTextVariant.value) return `px-small4 py-small3 rounded-none -rotate-1`;
    
    if (isOutlinedVariant.value) return `px-small4 py-small3 rounded-none -rotate-1`;

    return `px-small4 py-small3 rounded-none -rotate-1`;
});
</script>

<template>
    <button
        :aria-label="ariaLabel"
        :disabled="props.disabled"
        :class="[
            'relative inline-flex items-center justify-center',
            'font-bold transition-all duration-200',
            'cursor-pointer select-none',
            shapeClass,
            bgClass,
            textClass,
            borderClass,
            hoverClass,
            fluidClass,
            'h-normal',
            props.disabled ? 'opacity-50 cursor-not-allowed' : '',
            isStandardVariant && !props.disabled ? 'button-standard-effect' : '',
            isOutlinedVariant && !props.disabled ? 'button-inverted-effect' : ''
        ]"
        :style="{
            '--border-radius': 'var(--radius-standard)',
            '--padding-x': 'var(--spacing-small4)',
            '--padding-y': 'var(--spacing-small3)'
        }"
        v-bind="attrs"
    >
        <Text as="span" variant="caption" color="inherit" class="relative z-10 inline-flex items-center font-bold">
            <slot />
        </Text>
    </button>
</template>

<style scoped>
/* Standard Variant - mit Border-Effekt */
.button-standard-effect::after {
    content: '';
    position: absolute;
    border: 1px solid rgb(0, 0, 0);
    bottom: 4px;
    left: 4px;
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
