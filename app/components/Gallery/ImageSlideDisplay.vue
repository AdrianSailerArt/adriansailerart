<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import { NuxtImg } from '#components';

import { usePinchZoom } from '@/composables/usePinchZoom';
import IconButton from '~/atomics/button/IconButton.vue';
import Button from '~/atomics/button/Button.vue';

export type MediumReference = {
    id: string;
    alt?: string;
    title?: string;
    media?: {
        url: string;
    };
};

export type ImageSliderProps = {
    image: MediumReference;
    isDragging: boolean;
    swipeHandlers: {
        pointerdown: (e: PointerEvent) => void;
        pointermove: (e: PointerEvent) => void;
        pointerup: (e: PointerEvent) => void;
        pointerleave: (e: PointerEvent) => void;
    };
    mode?: 'preview' | 'fullscreen';
    hidePagination?: boolean;
};

withDefaults(defineProps<ImageSliderProps>(), {
    mode: 'preview',
    hidePagination: false
});

const emit = defineEmits(['prev', 'next']);

const imgWrapper = ref<HTMLElement | null>(null);
const { scale, translateX, translateY, reset, bind, unbind } = usePinchZoom(imgWrapper);

onMounted(() => bind());
onUnmounted(() => unbind());
</script>

<template>
    <div class="flex flex-col w-full" :class="mode === 'fullscreen' ? 'h-full' : ''">
        <div
            class="relative flex items-center justify-center select-none touch-none transition-all overflow-hidden"
            :class="[
                isDragging ? 'cursor-grabbing' : 'cursor-grab',
                mode === 'preview'
                    ? 'group rounded-standard aspect-video bg-black/20 border border-white/10 w-full'
                    : 'flex-1 w-full min-h-0 relative'
            ]"
            v-on="scale === 1 ? swipeHandlers : {}"
        >
            <template v-if="image">
                <!-- Zoom Wrapper -->
                <div
                    ref="imgWrapper"
                    class="w-full h-full flex items-center justify-center"
                    :style="{
                        transform: `scale(${scale}) translate(${translateX / scale}px, ${translateY / scale}px)`,
                        transition: scale === 1 ? 'transform 0.3s ease' : 'none',
                        transformOrigin: 'center center'
                    }"
                >
                    <NuxtImg
                        :key="image.id"
                        :src="image.media?.url"
                        :alt="image.alt"
                        class="pointer-events-none animate-fade-in"
                        :class="[
                            mode === 'preview'
                                ? 'w-auto h-full'
                                : 'w-full h-full object-contain shadow-navigationShadow'
                        ]"
                        draggable="false"
                    />
                </div>

                <!-- Actions Slot -->
                <div
                    class="absolute top-2 right-2 z-modal transition-opacity bg-white rounded-minimal"
                    :class="mode === 'preview' ? 'lg:opacity-20 group-hover:opacity-100' : ''"
                >
                    <slot name="actions" />
                </div>

                <!-- Reset Zoom Button -->
                <Transition name="fade">
                    <Button
                        v-if="scale > 1"
                        class="absolute bottom-2 left-1/2 -translate-x-1/2 z-modal text-xs bg-black/50 text-white px-small2 py-small rounded-full backdrop-blur-sm"
                        @click.stop="reset"
                    >
                        Zoom zurücksetzen
                    </Button>
                </Transition>
            </template>
        </div>

        <!-- Footer: Pagination + Navigation -->
        <div v-if="image" class="flex items-center justify-between gap-small2 pt-small2">
            <div
                class="flex overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                <slot name="footer" />
            </div>
            <div v-if="!hidePagination" class="flex shrink-0 gap-small">
                <IconButton icon-name="ChevronLeft" label="Vorherige" @click.stop="emit('prev')" />
                <IconButton icon-name="ChevronRight" label="Nächste" @click.stop="emit('next')" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
