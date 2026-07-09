<script setup lang="ts">
interface GalleryImage {
    src: string;
    alt?: string;
    href?: string;
}

interface Props {
    layout?:
        | 'masonry'
        | 'feature'
        | 'grid'
        | 'hero-split'
        | 'bento'
        | 'carousel'
        | 'single';

    background?: 'white' | 'gray';
    images: GalleryImage[];
}

const props = withDefaults(defineProps<Props>(), {
    layout: 'grid',
    background: 'white'
});

const bgClass = computed(() =>
    props.background === 'gray' ? 'bg-gray-50' : 'bg-white'
);
</script>

<template>
    <section :class="['max-w-screen-2xl mx-auto px-4 py-16 lg:py-24', bgClass]">
        <!-- ========================= -->
        <!-- SINGLE -->
        <!-- ========================= -->

        <div v-if="layout === 'single'">
            <img
                :src="images[0]?.src"
                :alt="images[0]?.alt"
                class="w-full object-cover"
            />
        </div>

        <!-- ========================= -->
        <!-- GRID -->
        <!-- ========================= -->

        <div
            v-else-if="layout === 'grid'"
            class="grid grid-cols-2 md:grid-cols-3 gap-2"
        >
            <img
                v-for="(image, index) in images"
                :key="index"
                :src="image.src"
                :alt="image.alt"
                class="aspect-square object-cover"
            />
        </div>

        <!-- ========================= -->
        <!-- BENTO -->
        <!-- ========================= -->

        <div
            v-else-if="layout === 'bento'"
            class="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-2"
        >
            <img
                v-if="images[0]"
                :src="images[0].src"
                class="col-span-2 row-span-2 object-cover w-full h-full"
            />

            <img
                v-if="images[1]"
                :src="images[1].src"
                class="object-cover w-full h-full"
            />

            <img
                v-if="images[2]"
                :src="images[2].src"
                class="object-cover w-full h-full"
            />

            <img
                v-if="images[3]"
                :src="images[3].src"
                class="col-span-2 object-cover w-full h-full"
            />
        </div>

        <!-- ========================= -->
        <!-- HERO SPLIT -->
        <!-- ========================= -->

        <div
            v-else-if="layout === 'hero-split'"
            class="flex flex-col md:flex-row gap-4 items-center"
        >
            <div class="flex-1">
                <img
                    :src="images[0]?.src"
                    class="w-full h-[500px] object-cover"
                />
            </div>

            <div class="flex-1 p-6">
                <slot name="content">
                    <h2 class="text-4xl font-bold">Titel</h2>

                    <p class="mt-4">Beschreibung</p>
                </slot>
            </div>
        </div>

        <!-- ========================= -->
        <!-- CAROUSEL -->
        <!-- ========================= -->

        <div
            v-else-if="layout === 'carousel'"
            class="flex gap-4 overflow-x-auto snap-x"
        >
            <img
                v-for="(image, index) in images"
                :key="index"
                :src="image.src"
                class="w-[80vw] md:w-[400px] h-[400px] object-cover flex-none snap-center"
            />
        </div>

        <!-- ========================= -->
        <!-- MASONRY -->
        <!-- ========================= -->

        <div
            v-else-if="layout === 'masonry'"
            class="flex flex-col md:flex-row gap-2"
        >
            <div class="flex-1 flex flex-col gap-2">
                <img :src="images[0]?.src" class="object-cover" />

                <div class="grid grid-cols-2 gap-2">
                    <img
                        v-for="i in [1, 2]"
                        :key="i"
                        :src="images[i]?.src"
                        class="object-cover"
                    />
                </div>
            </div>

            <div class="flex-1 flex flex-col gap-2">
                <div class="grid grid-cols-2 gap-2">
                    <img
                        v-for="i in [3, 4]"
                        :key="i"
                        :src="images[i]?.src"
                        class="object-cover"
                    />
                </div>

                <img :src="images[5]?.src" class="object-cover" />
            </div>
        </div>

        <!-- ========================= -->
        <!-- FEATURE -->
        <!-- ========================= -->

        <div
            v-else-if="layout === 'feature'"
            class="flex flex-col md:flex-row gap-2"
        >
            <img :src="images[0]?.src" class="flex-1 object-cover" />

            <div class="flex-1 grid grid-cols-2 gap-2">
                <img
                    v-for="image in images.slice(1)"
                    :key="image.src"
                    :src="image.src"
                    class="object-cover"
                />
            </div>
        </div>
    </section>
</template>
