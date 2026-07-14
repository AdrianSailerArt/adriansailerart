<script setup lang="ts">
import { computed } from 'vue';
import { marked } from 'marked';
interface MarkdownProps {
    markdownContent: string;
}

const props = defineProps<MarkdownProps>();

const htmlOutput = computed<string>(() => {
    if (!props.markdownContent) return '';

    return marked(props.markdownContent);
});

defineExpose({ htmlOutput });
</script>

<template>
    <div class="markdown-content" v-html="htmlOutput"></div>
</template>

<style scoped>
.markdown-content {
    color: inherit;
    font-family: var(--font-sans);
    font-size: var(--text-base);
    line-height: var(--body-base-line-height);
    font-weight: var(--body-base-font-weight);
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3),
.markdown-content :deep(h4),
.markdown-content :deep(h5),
.markdown-content :deep(h6) {
    color: inherit;
    font-weight: var(--font-weight-heading);
    margin-top: 2.25em;
    margin-bottom: 0.85em;
    line-height: 1.1;
}

.markdown-content :deep(h1) {
    font-size: var(--h1-font-size);
    line-height: var(--h1-line-height);
    letter-spacing: var(--h1-letter-spacing);
}

.markdown-content :deep(h2) {
    font-size: var(--h2-font-size);
    line-height: var(--h2-line-height);
    letter-spacing: var(--h2-letter-spacing);
}

.markdown-content :deep(h3) {
    font-size: var(--h3-font-size);
    line-height: var(--h3-line-height);
    letter-spacing: var(--h3-letter-spacing);
}

.markdown-content :deep(h4) {
    font-size: var(--h4-font-size);
    line-height: var(--h4-line-height);
    letter-spacing: var(--h4-letter-spacing);
}

.markdown-content :deep(h5) {
    font-size: var(--h5-font-size);
    line-height: var(--h5-line-height);
    letter-spacing: var(--h5-letter-spacing);
}

.markdown-content :deep(h6) {
    font-size: var(--h6-font-size);
    line-height: var(--h6-line-height);
    letter-spacing: var(--h6-letter-spacing);
}

.markdown-content :deep(p),
.markdown-content :deep(ul),
.markdown-content :deep(ol),
.markdown-content :deep(blockquote),
.markdown-content :deep(pre),
.markdown-content :deep(table) {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
}

.markdown-content :deep(p) {
    margin: 1.25em 0;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
    padding-left: 1.5rem;
}

.markdown-content :deep(li) {
    margin: 0.5em 0;
}

.markdown-content :deep(blockquote) {
    border-left: 4px solid var(--color-gray30);
    color: var(--color-gray70);
    margin: 1.5em 0;
    padding-left: 1rem;
    font-style: italic;
}

.markdown-content :deep(code) {
    background: rgba(0, 0, 0, 0.04);
    border-radius: 0.35rem;
    padding: 0.15em 0.35em;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.95em;
}

.markdown-content :deep(pre) {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 0.75rem;
    padding: 1rem;
    overflow-x: auto;
    line-height: 1.5;
}

.markdown-content :deep(a) {
    color: var(--color-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
}

.markdown-content :deep(strong) {
    font-weight: 600;
}

.markdown-content :deep(em) {
    font-style: italic;
}

.markdown-content :deep(hr) {
    border: none;
    border-top: 1px solid var(--color-gray20);
    margin: 2rem 0;
}

.markdown-content :deep(img) {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 1.5em auto;
}

.markdown-content :deep(table) {
    width: 100%;
    border-collapse: collapse;
}

.markdown-content :deep(th),
.markdown-content :deep(td) {
    border: 1px solid var(--color-gray20);
    padding: 0.75rem 1rem;
}

.markdown-content :deep(th) {
    font-weight: 600;
    background: rgba(0, 0, 0, 0.02);
}
</style>
