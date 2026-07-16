<script lang="ts" setup>
import md from '~/resources/intro.md?raw';
</script>

<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Herzlich Willkommen"
            subtitle="auf adriansailer.art"
            description=""
        />
        <div class="my-none mx-auto">
            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <NuxtImg
                    src="/Logo_Adrian_Sailer_Art.png"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0"
                />

                <div class="md:w-1/2">
                    <MarkdownRenderer :markdown-content="md" class="m-medium" />
                </div>
            </div>

            <div
                class="flex flex-col md:flex-row gap-small3 py-medium items-start"
            >
                <div class="md:w-1/2 order-2 md:order-1">
                    <MarkdownRenderer :markdown-content="md" class="m-medium" />
                </div>

                <NuxtImg
                    src="/Logo_Adrian_Sailer_Art.png"
                    alt="Adrian Sailer"
                    class="w-full md:w-1/2 h-auto shrink-0 order-1 md:order-2"
                />
            </div>
        </div>
    </div>
</template>
