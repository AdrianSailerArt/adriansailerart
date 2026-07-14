<script lang="ts" setup>
import md from '~/resources/about.md?raw';
</script>

<template>
    <div class="my-none mx-auto flex gap-small3">
        <NuxtImg
            src="/Logo_Adrian_Sailer_Art.png"
            alt="Adrian Sailer"
            class="w-1/2 h-auto"
        />
        <MarkdownRenderer :markdown-content="md" class="m-medium" />
    </div>
</template>
