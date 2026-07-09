<script lang="ts" setup>
import { ref } from 'vue';
import ImagePost from '~/components/Gallery/ImagePost.vue';
import type { MediumReference } from '~/components/Gallery/ImageSlideDisplay.vue';

// Deine Bilder/Medien
const myImages = ref<MediumReference[]>([
    {
        id: '1',
        title: 'Bild 1',
        alt: 'Beschreibung',
        media: {
            url: 'https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7'
        }
    },
    {
        id: '2',
        title: 'Bild 2',
        alt: 'Beschreibung',
        media: {
            url: 'https://images.unsplash.com/photo-1665048110211-91d0b74c421c'
        }
    },
    {
        id: '3',
        title: 'Bild 3',
        alt: 'Beschreibung',
        media: {
            url: 'https://images.unsplash.com/photo-1665048110211-91d0b74c421c'
        }
    },
    {
        id: '4',
        title: 'Bild 4',
        alt: 'Beschreibung',
        media: {
            url: 'https://images.unsplash.com/photo-1666060519824-796d5638d809'
        }
    }
]);
</script>

<template>
    <div>
        <Hero
            title="Herzlich Willkommen"
            subtitle="Willkommen in unserer Welt"
            description="Entdecken Sie die besten Produkte und Dienstleistungen für Ihre Bedürfnisse."
        />
        <BuyBox />
        <ImagePost :images="myImages" layout="feature" />
    </div>
</template>
