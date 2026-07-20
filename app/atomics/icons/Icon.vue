<script setup lang="ts">
import { computed } from 'vue';
import { icons } from './svg';
import type { IconColor, IconProps } from './types';
import { spacing } from '@/styles/spacing';

const props = defineProps<IconProps>();

defineEmits<{
    click: [event: MouseEvent];
}>();
const ICON_COLORS: Record<IconColor, string> = {
    standard: 'text-standard',
    gray: 'text-grayStandard',
    lightGray: 'text-lightGray',
    primary: 'text-primary',
    success: 'text-success',
    error: 'text-error dark:text-errorLightenOne',
    info: 'text-info',
    black: 'text-black',
    inherit: 'text-inherit dark:text-inherit',
    white: 'text-white',
    warning: 'text-warning'
};
const iconComponent = computed(() => icons[props.name || 'Loading']);

const colorClass = computed(() => ICON_COLORS[props.color || 'standard']);
</script>

<template>
    <i
        :class="['inline-flex items-center justify-center align-middle', colorClass]"
        :style="{ width: spacing[props.size || 'medium'], height: spacing[props.size || 'medium'] }"
        @click="$emit('click', $event)"
    >
        <component :is="iconComponent" v-if="iconComponent" />
        <span v-else class="text-error text-xs">[Missing: {{ name }}]</span>
    </i>
</template>
