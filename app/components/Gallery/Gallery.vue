<script setup lang="ts">
import type { MediumReference } from '~/types';

export type LayoutProps =
    | 'single' // Ein Bild (Full Width)
    | 'grid' // Standard Grid 2-3 Spalten
    | 'carousel' // Horizontales Scrolling
    | 'masonry' // Pinterest-Style (2 Spalten, unterschiedliche Höhen)
    | 'bento' // Mixed Grid (1. Bild 2x2, Rest 1x1)
    | 'feature' // Feature Image + Gallery (1. Bild groß, Rest in Grid)
    | 'waterfall'; // Cascade/Waterfall Style (neu)

export type Props = {
    layout?: LayoutProps;
    images: Array<MediumReference>;
};

const props = withDefaults(defineProps<Props>(), {
    layout: 'grid'
});

const emit = defineEmits<{
    imageClick: [image: MediumReference, index: number];
}>();


const firstImage = computed(() => props.images?.[0]);
const restImages = computed(() => props.images?.slice(1) ?? []);

const handleImageClick = (image: MediumReference, index: number) => {
    emit('imageClick', image, index);
};

const imageGroups = computed(() => {
    const groups = [];

    for (let i = 0; i < props.images.length; i += 6) {
        groups.push(props.images.slice(i, i + 6));
    }

    return groups;
});
</script>

<template>
    <section class="max-w-screen-2xl mx-auto px-small4 py-medium lg:py-large2">
        <!-- SINGLE -->
        <template v-if="layout === 'single'">
            <NuxtImg
                v-if="firstImage"
                :src="firstImage.media"
                :alt="firstImage.alt"
                class="w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                @click="handleImageClick(firstImage, 0)"
            />
        </template>

        <!-- GRID -->
        <template v-else-if="layout === 'grid'">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                <NuxtImg
                    v-for="(image, index) in images"
                    :key="index"
                    :src="image.media"
                    :alt="image.alt"
                    class="aspect-square object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    @click="handleImageClick(image, index)"
                />
            </div>
        </template>

        <!-- CAROUSEL -->
        <template v-else-if="layout === 'carousel'">
            <div class="flex gap-4 overflow-x-auto snap-x">
                <NuxtImg
                    v-for="(image, index) in images"
                    :key="index"
                    :src="image.media"
                    class="w-[80vw] md:w-[400px] h-[400px] object-cover flex-none snap-center cursor-pointer hover:opacity-80 transition-opacity"
                    @click="handleImageClick(image, index)"
                />
            </div>
        </template>

        <!-- BENTO -->
        <template v-else-if="layout === 'bento'">
            <div
                class="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-2"
            >
                <template v-for="(image, index) in images" :key="index">
                    <NuxtImg
                        :src="image.media"
                        :class="{
                            'col-span-2 row-span-2': index === 0,
                            'col-span-2': index === 3
                        }"
                        class="object-cover w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
                        @click="handleImageClick(image, index)"
                    />
                </template>
            </div>
        </template>

        <!-- HERO SPLIT / FEATURE -->
        <template v-else-if="layout === 'waterfall'">
            <div class="flex flex-wrap gap-4 justify-center">
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="break-inside-avoid"
                    :style="{ width: `${200 + (index % 3) * 50}px` }"
                >
                    <NuxtImg
                        :src="image.media"
                        :alt="image.alt"
                        class="w-full h-auto object-cover cursor-pointer hover:opacity-80 transition-opacity rounded"
                        @click="handleImageClick(image, index)"
                    />
                </div>
            </div>
        </template>

        <!-- MASONRY -->
        <template v-else-if="layout === 'masonry'">
            <div class="flex flex-col gap-2">
                <template
                    v-for="(group, groupIndex) in imageGroups"
                    :key="groupIndex"
                >
                    <div class="flex flex-col md:flex-row gap-2">
                        <!-- Linke Spalte -->

                        <div class="flex-1 flex flex-col gap-2">
                            <NuxtImg
                                v-if="group[0]"
                                :src="group[0].media"
                                class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                                @click="
                                    handleImageClick(group[0], groupIndex * 6)
                                "
                            />

                            <div
                                v-if="group.length > 1"
                                class="grid grid-cols-2 gap-2"
                            >
                                <NuxtImg
                                    v-for="(image, index) in group.slice(1, 3)"
                                    :key="index"
                                    :src="image.media"
                                    class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                                    @click="
                                        handleImageClick(
                                            image,

                                            groupIndex * 6 + index + 1
                                        )
                                    "
                                />
                            </div>
                        </div>

                        <!-- Rechte Spalte -->

                        <div class="flex-1 flex flex-col gap-2">
                            <div
                                v-if="group.length > 3"
                                class="grid grid-cols-2 gap-2"
                            >
                                <NuxtImg
                                    v-for="(image, index) in group.slice(3, 5)"
                                    :key="index"
                                    :src="image.media"
                                    class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                                    @click="
                                        handleImageClick(
                                            image,

                                            groupIndex * 6 + index + 3
                                        )
                                    "
                                />
                            </div>

                            <NuxtImg
                                v-if="group[5]"
                                :src="group[5].media"
                                class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                                @click="
                                    handleImageClick(
                                        group[5],
                                        groupIndex * 6 + 5
                                    )
                                "
                            />
                        </div>
                    </div>
                </template>
            </div>
        </template>

        <!-- FEATURE -->
        <template v-else-if="layout === 'feature'">
            <div v-if="firstImage" class="flex flex-col md:flex-row gap-2">
                <NuxtImg
                    :src="firstImage.media"
                    class="flex-1 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    @click="handleImageClick(firstImage, 0)"
                />
                <div class="flex-1 grid grid-cols-2 gap-2">
                    <NuxtImg
                        v-for="(image, index) in restImages"
                        :key="`${image.media}-${index}`"
                        :src="image.media"
                        class="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                        @click="handleImageClick(image, index + 1)"
                    />
                </div>
            </div>
        </template>
    </section>
</template>
