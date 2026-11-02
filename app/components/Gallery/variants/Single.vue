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
        :aria-label="`Bild vergrößern: ${firstImage.title ?? firstImage.alt}`"
        class="block w-full cursor-pointer"
        @click="emit('imageClick', firstImage, 0)"
    >
        <NuxtImg
            :src="firstImage.media"
            :alt="firstImage.alt"
            preset="static"
            class="w-full object-cover hover:opacity-80 transition-opacity"
        />
    </button>
</template>
