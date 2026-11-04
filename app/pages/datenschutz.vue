<script lang="ts" setup>
import md from '~/resources/markdown/datenschutz.md?raw';

useSeoMeta({
    title: 'Datenschutzerklärung',
    robots: 'noindex, follow'
});
</script>

<template>
    <div class="my-none mx-auto max-w-3xl px-small4 py-medium">
        <MarkdownRenderer :markdown-content="md" />
    </div>
</template>
