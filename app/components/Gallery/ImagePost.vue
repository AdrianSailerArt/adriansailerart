<script lang="ts" setup>
import { computed, nextTick, onUnmounted, ref } from 'vue';
import ImageSlideDisplay from './ImageSlideDisplay.vue';
import Gallery  from './Gallery.vue';
import IconButton from '~/atomics/button/IconButton.vue';
import Text from '~/atomics/text/Text.vue';
import type { MediumReference } from '~/types/index.js';
import type { LayoutProps } from './variants/types.js';

const props = defineProps<{
    images: NonNullable<Array<MediumReference>>;
    layout: LayoutProps;
}>();

const { activeIndex, currentItem, next, prev, swipeHandlers, isDragging } =
    useImageSlider(props.images);

const isSingleImage = computed(() => props.images.length === 1);

const isFullscreen = ref(false);
const dialog = ref<HTMLElement | null>(null);
let previouslyFocused: HTMLElement | null = null;

const openFullscreen = async () => {
    isFullscreen.value = true;

    if (import.meta.client) {
        previouslyFocused = document.activeElement as HTMLElement | null;
        document.body.style.overflow = 'hidden';
        globalThis.addEventListener('keydown', handleKeydown);

        await nextTick();
        dialog.value?.querySelector<HTMLElement>('button')?.focus();
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
        previouslyFocused?.focus();
    }
};

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeFullscreen();

    if (e.key === 'ArrowRight') next();

    if (e.key === 'ArrowLeft') prev();

    // Fokus in der Lightbox halten
    if (e.key === 'Tab' && dialog.value) {
        const focusable = Array.from(
            dialog.value.querySelectorAll<HTMLElement>('button:not([disabled])')
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) return;

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
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
            @image-click="handleGalleryImageClick"
        />

        <!-- FULLSCREEN: ImageSlideDisplay -->
        <Teleport to="body">
            <div
                v-if="isFullscreen"
                ref="dialog"
                role="dialog"
                aria-modal="true"
                aria-label="Bildansicht"
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
                >
                    <template v-if="!isSingleImage" #footer>
                        <Text
                            as="span"
                            color="white"
                            class="ml-small4 opacity-70 tabular-nums"
                        >
                            {{ activeIndex + 1 }} / {{ images.length }}
                        </Text>
                    </template>
                </ImageSlideDisplay>
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
