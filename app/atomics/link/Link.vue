<script setup lang="ts">
import { useAttrs } from 'vue';
import type { LinkType } from '../button/types';
import { useButtonClasses } from '../button/useButtonClasses';
import Text from '@/atomics/text/Text.vue';

/**
 * Navigation in Button-Optik – rendert immer einen echten Link
 */
const props = withDefaults(defineProps<LinkType>(), {
    color: 'primary',
    variant: 'standard',
    fluid: false
});

const attrs = useAttrs();

const classes = useButtonClasses(() => props);
</script>

<template>
    <NuxtLink
        v-bind="attrs"
        :to="to"
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
    </NuxtLink>
</template>

<style scoped src="../button/buttonEffect.css"></style>
