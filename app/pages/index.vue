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
      url: '/images/bild2.jpg'
    }
  },
  {
    id: '3',
    title: 'Bild 3',
    alt: 'Beschreibung',
    media: {
      url: '/images/bild3.jpg'
    }
  }
]);
</script>

<template><div><Hero title="Herzlich Willkommen" subtitle="Willkommen in unserer Welt" description="Entdecken Sie die besten Produkte und Dienstleistungen für Ihre Bedürfnisse." />
<BuyBox />
 <ImagePost :images="myImages" />

<Gallery
  layout="grid"
  background="gray"
  :images="[
    {
      src: 'https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7',
      alt: 'Bild 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1666433723497-38d1d053185b',
    },
    {
      src: 'https://images.unsplash.com/photo-1665048110211-91d0b74c421c',
    },
    {
      src: 'https://images.unsplash.com/photo-1666297599033-09b318f2c8b5',
    },
    {
      src: 'https://images.unsplash.com/photo-1664713815297-9ce06950c022',
    },
    {
      src: 'https://images.unsplash.com/photo-1666060519824-796d5638d809',
    },
  ]"
/>
</div>
</template>