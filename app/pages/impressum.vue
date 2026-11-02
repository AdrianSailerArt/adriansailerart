<script lang="ts" setup>
import md from '~/resources/markdown/impressum.md?raw';

useSeoMeta({
    title: 'Impressum | Adrian Sailer Art',
    robots: 'noindex, follow'
});
</script>

<template>
    <div class="my-none mx-auto max-w-3xl px-small4 py-medium">
        <MarkdownRenderer :markdown-content="md" />
    </div>
</template>
