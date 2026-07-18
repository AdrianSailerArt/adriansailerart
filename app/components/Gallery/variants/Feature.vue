<script lang="ts" setup>
import { computed } from 'vue';
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';
import Text from '~/atomics/text/Text.vue';

const props = defineProps<{
    images: Array<MediumReference>;
}>();

const firstImage = computed(() => props.images?.[0]);
const restImages = computed(() => props.images?.slice(1) ?? []);

const emit = defineEmits<EmitGalleryType>();
</script>

<template>
    <div v-if="firstImage" class="flex flex-col md:flex-row gap-small2">
        <!-- Hauptbild -->
        <div
            class="relative flex-1 overflow-hidden group cursor-pointer"
            @click="emit('imageClick', firstImage, 0)"
        >
            <NuxtImg
                :src="firstImage.media"
                :alt="firstImage.alt"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
                class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
                <div class="px-small4 py-small3 bg-black/30 backdrop-blur-md">
                    <Text color="white">
                        {{ firstImage.title }}
                    </Text>
                </div>
            </div>
        </div>

        <!-- Kleine Bilder -->
        <div class="flex-1 grid grid-cols-2 gap-small2">
            <div
                v-for="(image, index) in restImages"
                :key="`${image.media}-${index}`"
                class="relative overflow-hidden group cursor-pointer"
                @click="emit('imageClick', image, index + 1)"
            >
                <NuxtImg
                    :src="image.media"
                    :alt="image.alt"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                    class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                    <div
                        class="px-small4 py-small3 bg-black/30 backdrop-blur-md"
                    >
                        <Text color="white">
                            {{ image.title }}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
