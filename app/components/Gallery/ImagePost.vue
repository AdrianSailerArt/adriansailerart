<script lang="ts" setup>
import { computed, onUnmounted, ref } from 'vue';
import ImageSlideDisplay from './ImageSlideDisplay.vue';
import Gallery, { type LayoutProps } from './Gallery.vue';
import IconButton from '~/atomics/button/IconButton.vue';
import type { MediumReference } from '~/types/index.js';

const props = defineProps<{
    images: NonNullable<Array<MediumReference>>;
    layout: LayoutProps;
}>();

const { activeIndex, currentItem, next, prev, swipeHandlers, isDragging } =
    useImageSlider(props.images);

const isSingleImage = computed(() => props.images.length === 1);

const isFullscreen = ref(false);

const openFullscreen = () => {
    isFullscreen.value = true;

    if (import.meta.client) {
        document.body.style.overflow = 'hidden';
        globalThis.addEventListener('keydown', handleKeydown);
    }
};

const handleGalleryImageClick = (image: MediumReference, index: number) => {
    activeIndex.value = index;
    openFullscreen();
};

const closeFullscreen = () => {
    isFullscreen.value = false;

    if (import.meta.client) {
        document.body.style.overflow = '';
        globalThis.removeEventListener('keydown', handleKeydown);
    }
};

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeFullscreen();

    if (e.key === 'ArrowRight') next();

    if (e.key === 'ArrowLeft') prev();
};

onUnmounted(() => {
    if (import.meta.client) {
        document.body.style.overflow = '';
        globalThis.removeEventListener('keydown', handleKeydown);
    }
});
</script>

<template>
    <div>
        <!-- PREVIEW: Gallery -->
        <Gallery
            :images="images"
            :layout="layout"
            class="cursor-pointer"
            @imageClick="handleGalleryImageClick"
        />

        <!-- FULLSCREEN: ImageSlideDisplay -->
        <Teleport to="body">
            <div
                v-if="isFullscreen"
                class="fixed inset-0 z-modal bg-black/95 backdrop-blur-md animate-fade-in flex flex-col overflow-hidden"
            >
                <div class="absolute top-small4 right-small4 z-modal">
                    <IconButton
                        icon-name="Close"
                        label="Schließen"
                        @click="closeFullscreen"
                    />
                </div>

                <ImageSlideDisplay
                    v-if="currentItem"
                    :image="currentItem"
                    :is-dragging="isDragging"
                    :swipe-handlers="swipeHandlers"
                    :hide-pagination="isSingleImage"
                    mode="fullscreen"
                    class="h-full"
                    @prev="prev"
                    @next="next"
                />
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
