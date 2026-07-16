<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';

const props = defineProps<{
    images: Array<MediumReference>;
}>();

const emit = defineEmits<EmitGalleryType>();
</script>

<template>
    <div class="flex gap-small4 overflow-x-auto snap-x">
        <NuxtImg
            v-for="(image, index) in images"
            :key="index"
            :src="image.media"
            class="w-[80vw] md:w-[400px] h-[400px] object-cover flex-none snap-center cursor-pointer hover:opacity-80 transition-opacity"
            @click="emit('imageClick', image, index)"
        />
    </div>
</template>
