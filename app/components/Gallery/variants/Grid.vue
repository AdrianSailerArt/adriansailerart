<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';
import Text from '~/atomics/text/Text.vue';

type Props = {
    images: Array<MediumReference>;
};

defineProps<Props>();

const emit = defineEmits<EmitGalleryType>();
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-small2">
        <div
            v-for="(image, index) in images"
            :key="image.id"
            class="relative aspect-square overflow-hidden cursor-pointer group"
            @click="emit('imageClick', image, index)"
        >
            <NuxtImg
                :src="image.media"
                :alt="image.alt"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
                class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
                <div class="px-small4 py-small3 bg-black/30 backdrop-blur-md">
                    <Text color="white"> {{ image.title }}</Text>
                </div>
            </div>
        </div>
    </div>
</template>
