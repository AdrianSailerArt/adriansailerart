<script lang="ts" setup>
import md from '~/resources/markdown/bildrechte.md?raw';

useSeoMeta({
    title: 'Bildrechte & Lizenz',
    description: 'Alle Fotos auf adriansailer.de sind urheberrechtlich geschützt. So könnt ihr eine Lizenz anfragen und den Fotografen richtig nennen.'
});
</script>

<template>
    <div class="my-none mx-auto max-w-3xl px-small4 py-medium">
        <MarkdownRenderer :markdown-content="md" />
    </div>
</template>
