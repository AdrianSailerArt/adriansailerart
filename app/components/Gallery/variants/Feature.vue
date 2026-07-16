<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';

const props = defineProps<{
    images: Array<MediumReference>;
}>();
const firstImage = computed(() => props.images?.[0]);
const restImages = computed(() => props.images?.slice(1) ?? []);

const emit = defineEmits<EmitGalleryType>();
</script>

<template>
    <div v-if="firstImage" class="flex flex-col md:flex-row gap-small2">
        <NuxtImg
            :src="firstImage.media"
            class="flex-1 object-cover cursor-pointer hover:opacity-80 transition-opacity"
            @click="emit('imageClick', firstImage, 0)"
        />
        <div class="flex-1 grid grid-cols-2 gap-small2">
            <NuxtImg
                v-for="(image, index) in restImages"
                :key="`${image.media}-${index}`"
                :src="image.media"
                class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                @click="emit('imageClick', image, index + 1)"
            />
        </div>
    </div>
  
</template>
