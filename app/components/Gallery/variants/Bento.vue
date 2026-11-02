<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';

 defineProps<{
    images: Array<MediumReference>;
}>();

const emit = defineEmits<EmitGalleryType>();
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-small2">
        <template v-for="(image, index) in images" :key="index">
            <button
                type="button"
                :aria-label="`Bild vergrößern: ${image.title ?? image.alt}`"
                :class="{
                    'col-span-2 row-span-2': index === 0,
                    'col-span-2': index === 3
                }"
                class="block w-full h-full cursor-pointer"
                @click="emit('imageClick', image, index)"
            >
                <NuxtImg
                    :src="image.media"
                    :alt="image.alt"
                    preset="static"
                    class="object-cover w-full h-full hover:opacity-80 transition-opacity"
                />
            </button>
        </template>
    </div>
</template>
