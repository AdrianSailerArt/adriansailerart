<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';

const props = defineProps<{
    images: Array<MediumReference>;
}>();

const firstImage = computed(() => props.images?.[0]);
const emit = defineEmits<EmitGalleryType>();
</script>

<template>
    <button
        v-if="firstImage"
        type="button"
        :aria-label="`Bild vergrößern: ${firstImage.alt ?? firstImage.title}`"
        class="block w-full cursor-pointer"
        @click="emit('imageClick', firstImage, 0)"
    >
        <NuxtImg
            :src="firstImage.media"
            :alt="firstImage.alt"
            preset="static"
            sizes="xs:100vw 2xl:100vw"
            loading="lazy"
            class="w-full object-cover hover:opacity-80 transition-opacity"
        />
    </button>
</template>
