<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { concertImages } from '~/resources/imageSrc/concet';

useSeoMeta({
  title: 'Konzertfotografie | Adrian Sailer Art',
  ogTitle: 'Live- & Konzertfotograf',
  description:
    'Dynamische Konzertfotografie für Bands, Festivals und Veranstalter. Energiegeladene Live-Momente professionell festgehalten.',
  ogDescription:
    'Konzertfotografie aus dem Schwarzwald und deutschlandweit.',
  keywords:
    'Konzertfotograf, Festivalfotografie, Bandfotografie, Livefotografie',
 // ogImage: '/images/social/concert.jpg',
 
  ogType: 'article'
});
</script>
<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Konzerte und Artist Gallerie"
            subtitle="Einzigartige Momente & Energie"
            background-image="/concert/BossHoss.jpg"
           
        />
        <ImagePost :images="concertImages" layout="grid" />
      
    </div>
</template>
