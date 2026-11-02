<script setup lang="ts">
import { useAttrs } from 'vue';
import type { ButtonType } from './types';
import { useButtonClasses } from './useButtonClasses';
import Text from '@/atomics/text/Text.vue';

const props = withDefaults(defineProps<ButtonType>(), {
    color: 'primary',
    variant: 'standard',
    fluid: false,
    disabled: false,
});

const attrs = useAttrs();

const classes = useButtonClasses(() => props);
</script>

<template>
    <button
        v-bind="attrs"
        :type="(attrs.type as 'button' | 'submit' | 'reset') ?? 'button'"
        :disabled="disabled"
        :aria-label="ariaLabel"
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

<style scoped src="./buttonEffect.css"></style>
