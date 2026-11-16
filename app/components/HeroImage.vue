<script setup lang="ts">
/**
 * Titelbild eines Heros als echtes <img> statt CSS-Hintergrund:
 * Google Bilder kann es indexieren, und der Browser lädt es sofort mit hoher Priorität
 * in der passenden Größe (srcset). Auf dem Handy im Hochformat füllt das Querformatbild die
 * Höhe, deshalb 200vw für kleine Bildschirme. Größte Stufe 2560 px = Breite der Originale.
 */
type HeroImageProps = {
    src: string;
    alt: string;
};

defineProps<HeroImageProps>();
</script>

<template>
    <NuxtImg
        :src="src"
        :alt="alt"
        preset="static"
        sizes="xs:200vw md:100vw lg:100vw xl:100vw"
        loading="eager"
        fetchpriority="high"
        preload
        class="absolute inset-0 h-full w-full object-cover object-center"
    />
</template>
