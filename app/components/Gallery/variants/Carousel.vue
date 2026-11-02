<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';
import Text from '~/atomics/text/Text.vue';

defineProps<{
    images: Array<MediumReference>;
}>();

const emit = defineEmits<EmitGalleryType>();
</script>

<template>
    <div
        class="flex gap-small4 overflow-x-auto snap-x"
        role="region"
        aria-label="Bildergalerie, horizontal scrollbar"
    >
        <button
            v-for="(image, index) in images"
            :key="image.id"
            type="button"
            :aria-label="`Bild vergrößern: ${image.alt ?? image.title}`"
            class="relative block w-[80vw] md:w-[400px] h-[400px] flex-none overflow-hidden snap-center group cursor-pointer"
            @click="emit('imageClick', image, index)"
        >
            <NuxtImg
                :src="image.media"
                :alt="image.alt"
                 preset="static"
                 sizes="xs:80vw lg:400px"
                 loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
                class="
                    absolute
                    inset-x-0
                    bottom-0
                    translate-y-full
                    group-hover:translate-y-0 group-focus-visible:translate-y-0
                    transition-transform
                    duration-300
                "
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
</template>