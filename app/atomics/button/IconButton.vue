<script setup lang="ts">
import { computed } from 'vue';
import type { IconProps } from '~/atomics/icons/types';
import { Icon } from '@/atomics/icons';

type IconButtonColor = 'primary' | 'info' | 'gray';
type IconButtonSize = 'standard' | 'big';

interface Props {
    color?: IconButtonColor;
    disabled?: boolean;
    size?: IconButtonSize;
    iconName: IconProps['name'];
    label?: string;
}

const props = withDefaults(defineProps<Props>(), {
    color: 'info',
    disabled: false,
    size: 'standard',
    label: ''
});
const emit = defineEmits<{
    click: [event: MouseEvent];
}>();
const colorClass = computed(() => {
    const base =
        {
            primary: 'bg-primary/15 text-primary',
            gray: 'bg-gray30/20 text-gray50',
            info: 'bg-info/15 text-info'
        }[props.color] || 'bg-info/15 text-info';

    if (props.disabled) {
        return base;
    }

    const hover =
        {
            primary: 'hover:bg-primary hover:text-white',
            gray: 'hover:bg-gray50 hover:text-white',
            info: 'hover:bg-info hover:text-white'
        }[props.color] || 'hover:bg-info hover:text-white';

    return `${base} ${hover}`;
});

const sizeClass = computed(() => {
    return {
        standard: 'p-small2',
        big: 'p-small3'
    }[props.size];
});

const iconSize = computed(() => {
    return {
        standard: 'medium',
        big: 'medium2'
    }[props.size] as IconProps['size'];
});
</script>

<template>
    <button
        type="button"
        :disabled="disabled"
        :aria-label="label || iconName"
        class="inline-flex items-center justify-center rounded-circle transition-colors duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
        :class="[colorClass, sizeClass, disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer']"
        @click="emit('click', $event)"
    >
        <Icon :name="iconName" :size="iconSize" color="inherit" />
    </button>
</template>
