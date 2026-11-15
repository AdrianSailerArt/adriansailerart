<script setup lang="ts">
type LogoProps = {
    /** Angezeigte Breite je Bildschirm, wie beim `sizes`-Attribut von <img> */
    sizes?: string;
    /** Leer lassen, wenn der umgebende Link oder Text das Logo schon benennt */
    alt?: string;
    loading?: 'eager' | 'lazy';
};

withDefaults(defineProps<LogoProps>(), {
    sizes: '160px',
    alt: '',
    loading: 'eager'
});

const { baseURL } = useRuntimeConfig().app;

/**
 * Vorab stark komprimierte WebP-Varianten (public/logo-*.webp, Alpha-Qualität 70).
 * Über @nuxt/image wäre das Logo mit Aquarell-Transparenz rund doppelt so groß.
 */
const srcset = [160, 320, 640].map((width) => `${baseURL}logo-${width}.webp ${width}w`).join(', ');
</script>

<template>
    <img
        :src="`${baseURL}logo-320.webp`"
        :srcset="srcset"
        :sizes="sizes"
        :alt="alt"
        :loading="loading"
        width="640"
        height="640"
        decoding="async"
    >
</template>
