<script lang="ts" setup>
import md from '~/resources/markdown/about.md?raw';

useSocialImage('/adrian-sailer.jpg', 'Adrian Sailer mit Sofortbildkamera im Studio');

useSeoMeta({
    title: 'Über mich | Adrian Sailer',
    ogTitle: 'Über Adrian Sailer',
    description:
        'Lerne den Fotografen Adrian Sailer kennen. Leidenschaft für Hochzeiten, Portraits, Konzerte und die Natur des Schwarzwalds.',
    ogDescription:
        'Mehr über Adrian Sailer und seine fotografische Leidenschaft.',
    keywords: 'Adrian Sailer, Fotograf Freiburg, Fotograf Schwarzwald',

    ogType: 'profile'
});
</script>

<template>
    <div class="my-none mx-auto flex flex-col md:flex-row gap-small3 py-medium">
        <NuxtImg
            src="/adrian-sailer.jpg"
            alt="Adrian Sailer mit Sofortbildkamera im Studio"
            preset="static"
            sizes="xs:100vw lg:50vw 2xl:50vw"
            class="w-full md:w-1/2 h-auto shrink-0"
        />

        <div class="md:w-1/2">
            <MarkdownRenderer :markdown-content="md" class="m-medium" />
        </div>
    </div>
</template>
