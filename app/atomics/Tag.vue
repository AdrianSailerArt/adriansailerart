<script lang="ts" setup>
import type { ColorName } from '~/styles/colors/index.js';
import Text from './text/Text.vue';
import { colorMap } from './button/types.js';

type TagProps = {
    color?: Extract<ColorName, 'primary' | 'secondary' | 'success' | 'warning' | 'info'>;
};

const props = withDefaults(defineProps<TagProps>(), {
    color: 'primary'
});

const background = computed(() => colorMap[props.color].bg);
</script>

<template>
    <div
        class="border border-black rounded-minimal px-small4 py-small3 text-white"
        :class="background"
    >
        <Text><slot /></Text>
    </div>
</template>
