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
            <NuxtImg
                :src="image.media"
                :class="{
                    'col-span-2 row-span-2': index === 0,
                    'col-span-2': index === 3
                }"
                class="object-cover w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
                @click="emit('imageClick', image, index)"
            />
              <div
                class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
                <div class="px-small4 py-small3 bg-black/30 backdrop-blur-md">
                    <Text color="white"> {{ image.title }}</Text>
                </div>
            </div>
        </template>
    </div>
</template>
