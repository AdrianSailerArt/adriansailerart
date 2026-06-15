<script setup lang="ts">
import { computed } from 'vue';
import type { TextColor, TextType } from './types';
import { FontStyles, HeadlineStyles } from '@/styles/fontTypes';

const props = defineProps<TextType>();

const ALL_STYLES = { ...FontStyles, ...HeadlineStyles };

const TEXT_COLORS: Record<TextColor, string> = {
    standard: 'text-standard',
    primary: 'text-primary',
    white: 'text-white',
    success: 'text-success',
    error: 'text-error dark:text-errorLightenOne',
    info: 'text-info dark:text-infoLightenOne',
    gray: 'text-grayStandard',
    inherit: 'text-inherit dark:text-inherit'
};

const tag = computed(() => props.as || 'p');

const styleObject = computed(() => {
    const variant =
        props.variant || (tag.value in HeadlineStyles ? (tag.value as keyof typeof HeadlineStyles) : 'body');
    const s = ALL_STYLES[variant];

    return {
        fontSize: s.fontSize,
        lineHeight: s.lineHeight,
        fontWeight: s.fontWeight?.toString(),
        ...(s.letterSpacing ? { letterSpacing: s.letterSpacing } : {}),
        ...(s.textTransform ? { textTransform: s.textTransform } : {}),
        ...(s.fontStyle ? { fontStyle: s.fontStyle } : {}),
        ...(s.textDecoration ? { textDecoration: s.textDecoration } : {})
    } as Partial<CSSStyleDeclaration>;
});

const colorClass = computed(() => (props.color ? TEXT_COLORS[props.color] : 'text-standard'));
</script>

<template>
    <component :is="tag" :style="styleObject" :class="[colorClass]">
        <slot />
    </component>
</template>
