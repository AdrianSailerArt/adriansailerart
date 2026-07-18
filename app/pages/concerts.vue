<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { concertImages } from '~/resources/imageSrc/concet';
import { regenImages } from '~/resources/imageSrc/regen';
import { trachtImages } from '~/resources/imageSrc/tracht';
</script>
<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Konzerte und Artist Gallerie"
            subtitle="Cosplay & Fantasy"
            background-image="/concert/BossHoss.jpg"
           
        />
        <ImagePost :images="concertImages" layout="grid" />
         <ImagePost :images="trachtImages" layout="feature" />
          <ImagePost :images="regenImages" layout="masonry" />
    </div>
</template>
