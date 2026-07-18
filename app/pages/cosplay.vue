<script lang="ts" setup>
import ImagePost from '~/components/Gallery/ImagePost.vue';
import { cosplayImages } from '~/resources/imageSrc/cosplay';
</script>
<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Cosplay Gallerie"
            subtitle="Cosplay & Fantasy"
        
            background-image="/cosplay/Viking-3.jpg"
        />
        <ImagePost :images="cosplayImages" layout="grid" />
    </div>
</template>
