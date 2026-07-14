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
            description="Entdecken Sie die besten Produkte und Dienstleistungen für Ihre Bedürfnisse."
            background-image="/cosplay/Keira Metz - Anna Rosa-2.jpg"
        />
        <ImagePost :images="cosplayImages" layout="grid" />
    </div>
</template>
