<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';

defineProps<{
    images: Array<MediumReference>;
}>();

const emit = defineEmits<EmitGalleryType>();
</script>

<template>
    <div class="flex flex-wrap gap-small4 justify-center">
        <div
            v-for="(image, index) in images"
            :key="index"
            class="break-inside-avoid"
            :style="{ width: `${200 + (index % 3) * 50}px` }"
        >
            <NuxtImg
                :src="image.media"
                :alt="image.alt"
                 preset="static"
                class="w-full h-auto object-cover cursor-pointer hover:opacity-80 transition-opacity rounded"
                @click="emit('imageClick', image, index)"
            />
        </div>
    </div>
</template>
