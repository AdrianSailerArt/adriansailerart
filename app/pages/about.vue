<script lang="ts" setup>
import md from '~/resources/markdown/about.md?raw';

useSeoMeta({
    title: 'Über mich | Adrian Sailer',
    ogTitle: 'Über Adrian Sailer',
    description:
        'Lerne den Fotografen Adrian Sailer kennen. Leidenschaft für Hochzeiten, Portraits, Konzerte und die Natur des Schwarzwalds.',
    ogDescription:
        'Mehr über Adrian Sailer und seine fotografische Leidenschaft.',
    keywords: 'Adrian Sailer, Fotograf Freiburg, Fotograf Schwarzwald',
    // ogImage: '/images/social/about.jpg',

    ogType: 'profile'
});
</script>

<template>
    <div class="my-none mx-auto flex flex-col md:flex-row gap-small3 py-medium">
        <NuxtImg
            src="/adrian-sailer.jpg"
            alt="Adrian Sailer"
            preset="static"
            class="w-full md:w-1/2 h-auto shrink-0"
        />

        <div class="md:w-1/2">
            <MarkdownRenderer :markdown-content="md" class="m-medium" />
        </div>
    </div>
</template>
