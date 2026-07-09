<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import type { MediumReference } from '~/components/Gallery/ImageSlideDisplay.vue';
// Deine Bilder/Medien
const myImages = <Array<MediumReference>>([
    {
        id: '1',
        title: 'Bild 1',
        alt: 'Beschreibung',
        media: {
            url: '/cosplay/Keira Metz - Anna Rosa-2.jpg'
        }
    },
    {
        id: '2',
        title: 'Bild 2',
        alt: 'Beschreibung',
        media: {
            url: '/cosplay/Keira Metz - Anna Rosa-3.jpg'
        }
    },
    {
        id: '3',
        title: 'Bild 3',
        alt: 'Beschreibung',
        media: {
            url: '/cosplay/Keira Metz - Anna Rosa-4.jpg'
        }
    },
    {
        id: '4',
        title: 'Bild 4',
        alt: 'Beschreibung',
        media: {
            url: '/cosplay/Keira Metz - Anna Rosa-5.jpg'
        }
    },
    {
        id: '5',
        title: 'Bild 5',
        alt: 'Beschreibung',
        media: {
            url: '/cosplay/Keira Metz - Anna Rosa-6.jpg'
        }
    },
    {
        id: '6',
        title: 'Bild 4',
        alt: 'Beschreibung',
        media: {
            url: '/cosplay/Keira Metz - Anna Rosa-7.jpg'
        }
    },
    {
        id: '7',
        title: 'Bild 4',
        alt: 'Beschreibung',
        media: {
            url: '/cosplay/Keira Metz - Anna Rosa-8.jpg'
        }
    },
    {
        id: '8',
        title: 'Bild 4',
        alt: 'Beschreibung',
        media: {
            url: '/cosplay/Keira Metz - Anna Rosa-9.jpg'
        }
    }
]);
</script>
<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Cosplay Gallerie"
            subtitle="Cosplay & Fantasy"
            description="Entdecken Sie die besten Produkte und Dienstleistungen für Ihre Bedürfnisse."
            background-image="/cosplay/Keira Metz - Anna Rosa-2.jpg"
        />
         <ImagePost :images="myImages" layout="grid" />
    </div>
</template>
