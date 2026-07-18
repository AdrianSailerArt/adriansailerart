<script lang="ts" setup>
import md from '~/resources/datenschutz.md?raw';
</script>

<template>
    <div class="my-none mx-auto max-w-3xl" >
        <MarkdownRenderer :markdown-content="md" />
    </div>
</template>
