<script lang="ts" setup>
import type { MediumReference } from '~/types';
import type { EmitGalleryType } from './types';

const props = defineProps<{
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
        </template>
    </div>
</template>
