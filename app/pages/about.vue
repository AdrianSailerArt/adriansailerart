<script lang="ts" setup>
import md from '~/resources/about.md?raw';
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
