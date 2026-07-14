<script lang="ts" setup>
import md from '~/resources/intro.md?raw';
</script>

<template>
    <div>
        <Hero
            image="/Logo_Adrian_Sailer_Art.png"
            title="Herzlich Willkommen"
            subtitle="Willkommen in unserer Welt"
            description="Entdecken Sie die besten Produkte und Dienstleistungen für Ihre Bedürfnisse."
        />
  <MarkdownRenderer :markdown-content="md" class="m-medium" />
        <BuyBox />
    </div>
</template>
