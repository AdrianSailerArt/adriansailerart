<script lang="ts" setup>
import { computed, onUnmounted, ref } from 'vue';
import ImageSlideDisplay, {
    type MediumReference
} from './ImageSlideDisplay.vue';
import Gallery from './Gallery.vue';
import Text from '@/atomics/text/Text.vue';
import IconButton from '~/atomics/button/IconButton.vue';

const props = defineProps<{
    images: NonNullable<Array<MediumReference>>;
}>();

const { activeIndex, currentItem, next, prev, swipeHandlers, isDragging } =
    useImageSlider(props.images);

const isSingleImage = computed(() => props.images.length === 1);
const imageLabel = (img: MediumReference, index: number) =>
    img.title ?? String(index + 1);

const isFullscreen = ref(false);
const isSidebarVisible = ref(true);
const isGalleryView = ref(false);

const galleryImages = computed(() =>
    props.images.map(img => ({
        src: img.media?.url || '',
        alt: img.alt || img.title || '',
        href: img.media?.url
    }))
);

const openFullscreen = () => {
    isFullscreen.value = true;
    isSidebarVisible.value = true;
    isGalleryView.value = false;

    if (import.meta.client) {
        document.body.style.overflow = 'hidden';
        globalThis.addEventListener('keydown', handleKeydown);
    }
};

const toggleGalleryView = () => {
    isGalleryView.value = !isGalleryView.value;
};

const handleGalleryImageClick = (image: any, index: number) => {
    activeIndex.value = index;
    isGalleryView.value = false;
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
        <ImageSlideDisplay
            v-if="currentItem"
            :image="currentItem"
            :is-dragging="isDragging"
            :swipe-handlers="swipeHandlers"
            :hide-pagination="isSingleImage"
            mode="preview"
            @prev="prev"
            @next="next"
        >
            <template #footer>
                <template v-if="isSingleImage">
                    <Text
                        v-if="images[0]?.title"
                        variant="caption"
                        color="info"
                        class="mt-small2"
                    >
                        {{ imageLabel(images[0], 0) }}
                    </Text>
                </template>
                <div
                    v-else
                    class="flex gap-small overflow-x-auto pb-small scrollbar-hide"
                >
                    <div
                        v-for="(img, index) in images"
                        :key="img.id"
                        class="cursor-pointer whitespace-nowrap"
                        @click="activeIndex = index"
                    >
                        {{ imageLabel(img, index) }}
                    </div>
                </div>
            </template>
            <template #actions>
                <IconButton
                    icon-name="Fullscreen"
                    label="Vollbild"
                    @click.stop="openFullscreen"
                />
            </template>
        </ImageSlideDisplay>

        <Teleport to="body">
            <div
                v-if="isFullscreen"
                class="fixed inset-0 z-modal bg-black/95 backdrop-blur-md animate-fade-in flex flex-col lg:flex-row overflow-hidden"
            >
                <div
                    class="flex-1 relative flex flex-col min-h-0 h-full min-w-0"
                >
                    <div
                        class="absolute top-small4 right-small4 z-modal flex gap-2"
                    >
                        <IconButton
                            icon-name="Grid"
                            :label="isGalleryView ? 'Zur Bildansicht' : 'Zur Galerieansicht'"
                            class="lg:hidden"
                            @click="toggleGalleryView"
                        />
                        <IconButton
                            icon-name="Close"
                            class="lg:hidden"
                            label="Schließen"
                            @click="closeFullscreen"
                        />

                        <IconButton
                            v-if="!isSidebarVisible"
                            icon-name="SidebarCollapse"
                            label="Einklappen"
                            @click="isSidebarVisible = true"
                        />
                        <IconButton
                            v-if="!isSidebarVisible"
                            icon-name="Close"
                            label="Schließen"
                            @click="closeFullscreen"
                        />
                    </div>

                    <Gallery
                        v-if="isGalleryView && galleryImages.length > 0"
                        :images="galleryImages"
                        layout="grid"
                        class="h-full w-full"
                        @imageClick="handleGalleryImageClick"
                    />
                    <ImageSlideDisplay
                        v-else-if="currentItem"
                        :image="currentItem"
                        :is-dragging="isDragging"
                        :swipe-handlers="swipeHandlers"
                        :hide-pagination="isSingleImage"
                        mode="fullscreen"
                        class="h-full"
                        @prev="prev"
                        @next="next"
                    >
                        <template #footer>
                            <template v-if="isSingleImage">
                                <Text
                                    v-if="images[0]?.title"
                                    variant="caption"
                                    color="info"
                                    class="mt-small2 px-small4"
                                >
                                    {{ imageLabel(images[0], 0) }}
                                </Text>
                            </template>
                            <div
                                v-else
                                class="flex gap-small overflow-x-auto pb-medium px-small4 justify-center"
                            >
                                <div
                                    v-for="(img, index) in images"
                                    :key="img.id"
                                    class="cursor-pointer whitespace-nowrap"
                                    @click="activeIndex = index"
                                >
                                    {{ imageLabel(img, index) }}
                                </div>
                            </div>
                        </template>
                    </ImageSlideDisplay>
                </div>
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
