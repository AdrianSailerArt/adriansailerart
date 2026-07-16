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
    <NuxtImg
        v-if="firstImage"
        :src="firstImage.media"
        :alt="firstImage.alt"
        class="w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
        @click="emit('imageClick', firstImage, 0)"
    />
</template>
