<script setup lang="ts">
import type { MediumReference } from '~/types';
import Grid from './variants/Grid.vue';
import type { EmitGalleryType, LayoutProps } from './variants/types.js';
import Single from './variants/Single.vue';
import Carousel from './variants/Carousel.vue';
import Bento from './variants/Bento.vue';
import Waterfall from './variants/Waterfall.vue';
import Masonry from './variants/Masonry.vue';
import Feature from './variants/Feature.vue';

type Props = {
    layout?: LayoutProps;
    images: Array<MediumReference>;
};

const props = withDefaults(defineProps<Props>(), {
    layout: 'grid'
});

const emit = defineEmits<EmitGalleryType>();

const handleImageClick = (image: MediumReference, index: number) => {
    emit('imageClick', image, index);
};
</script>

<template>
    <section class="max-w-screen-2xl mx-auto px-small4 py-medium lg:py-large2">
        <!-- SINGLE -->
        <template v-if="layout === 'single'">
            <Single :images="images" @imageClick="handleImageClick" />
        </template>

        <!-- GRID -->
        <template v-else-if="layout === 'grid'">
            <Grid :images="images" @imageClick="handleImageClick" />
        </template>

        <!-- CAROUSEL -->
        <template v-else-if="layout === 'carousel'">
            <Carousel :images="images" @imageClick="handleImageClick" />
        </template>

        <!-- BENTO -->
        <template v-else-if="layout === 'bento'">
            <Bento :images="images" @imageClick="handleImageClick" />
        </template>

        <!-- WATERFALL -->
        <template v-else-if="layout === 'waterfall'">
            <Waterfall :images="images" @imageClick="handleImageClick" />
        </template>

        <!-- MASONRY -->
        <template v-else-if="layout === 'masonry'">
            <Masonry :images="images" @imageClick="handleImageClick" />
        </template>

        <!-- FEATURE -->
        <template v-else-if="layout === 'feature'">
            <Feature :images="images" @imageClick="handleImageClick" />
        </template>
    </section>
</template>
