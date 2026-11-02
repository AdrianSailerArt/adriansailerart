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
        <button
            type="button"
            :aria-label="`Bild vergrößern: ${firstImage.title ?? firstImage.alt}`"
            class="relative block flex-1 overflow-hidden group cursor-pointer"
            @click="emit('imageClick', firstImage, 0)"
        >
            <NuxtImg
                :src="firstImage.media"
                :alt="firstImage.alt"
                
                 preset="static"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
                class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-300"
            >
                <div class="px-small4 py-small3 bg-black/30 backdrop-blur-md">
                    <Text as="span" color="white">
                        {{ firstImage.title }}
                    </Text>
                </div>
            </div>
        </button>

        <!-- Kleine Bilder -->
        <div class="flex-1 grid grid-cols-2 gap-small2">
            <button
                v-for="(image, index) in restImages"
                :key="`${image.media}-${index}`"
                v-reveal="(index % 2) * 80"
                type="button"
                :aria-label="`Bild vergrößern: ${image.title ?? image.alt}`"
                class="relative block overflow-hidden group cursor-pointer"
                @click="emit('imageClick', image, index + 1)"
            >
                <NuxtImg
                    :src="image.media"
                    :alt="image.alt"
                     preset="static"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                    class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-300"
                >
                    <div
                        class="px-small4 py-small3 bg-black/30 backdrop-blur-md"
                    >
                        <Text as="span" color="white">
                            {{ image.title }}
                        </Text>
                    </div>
                </div>
            </button>
        </div>
    </div>
</template>
