<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';

type Props = {
    images: Array<MediumReference>;
};
defineProps<Props>();

const emit = defineEmits<EmitGalleryType>();

</script>
<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-small2">
        <NuxtImg
            v-for="(image, index) in images"
            :key="index"
            :src="image.media"
            :alt="image.alt"
            class="aspect-square object-cover cursor-pointer hover:opacity-80 transition-opacity"
            @click="emit('imageClick', image, index);"
        />
    </div>
</template>
