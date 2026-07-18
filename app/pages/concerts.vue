<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { peopleImages } from '~/resources/imageSrc/people';
import { regenImages } from '~/resources/imageSrc/regen';
import { trachtImages } from '~/resources/imageSrc/tracht';
</script>
<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Konzerte und Artist Gallerie"
            subtitle="Cosplay & Fantasy"
           
        />
        <ImagePost :images="peopleImages" layout="grid" />
         <ImagePost :images="trachtImages" layout="feature" />
          <ImagePost :images="regenImages" layout="masonry" />
    </div>
</template>
