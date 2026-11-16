<script setup lang="ts">
import { computed, ref } from 'vue';
import IconButton from '~/atomics/button/IconButton.vue';

/**
 * Horizontaler Slider für beliebige Inhalte (Karten, Zitate, Bilder).
 * Jedes Kind im Default-Slot ist eine Folie. Wie viele Folien nebeneinander stehen,
 * steuert `perView` je Breakpoint (xs = Handy, sm ab 768 px, lg ab 1280 px).
 * Logik: useSlider().
 */
type ContentSliderProps = {
    /** Beschriftung für Screenreader, z. B. „Kundenstimmen“ */
    label: string;
    perView?: { xs: number; sm: number; lg: number };
};

const props = withDefaults(defineProps<ContentSliderProps>(), {
    perView: () => ({ xs: 1.1, sm: 2, lg: 3 })
});

const track = ref<HTMLElement | null>(null);
const { page, pageCount, canPrev, canNext, next, prev, goTo } = useSlider(track);

const trackStyle = computed(() => ({
    '--per-view-xs': props.perView.xs,
    '--per-view-sm': props.perView.sm,
    '--per-view-lg': props.perView.lg
}));
</script>

<template>
    <div role="region" aria-roledescription="Karussell" :aria-label="label" class="flex flex-col gap-small4">
        <ul
            ref="track"
            tabindex="0"
            :aria-label="`${label}, mit Pfeiltasten oder Wischen blättern`"
            class="slider-track"
            :style="trackStyle"
        >
            <slot />
        </ul>

        <div v-if="pageCount > 1" class="flex items-center justify-between gap-small4">
            <ol class="flex flex-wrap items-center gap-small" aria-label="Seiten">
                <li v-for="index in pageCount" :key="index">
                    <button
                        type="button"
                        class="slider-dot"
                        :aria-label="`Seite ${index} von ${pageCount}`"
                        :aria-current="page === index - 1 ? 'true' : undefined"
                        @click="goTo(index - 1)"
                    >
                        <span aria-hidden="true" />
                    </button>
                </li>
            </ol>

            <div class="flex gap-small2">
                <IconButton
                    icon-name="ChevronLeft"
                    label="Zurück"
                    color="primary"
                    size="big"
                    :disabled="!canPrev"
                    @click="prev"
                />
                <IconButton
                    icon-name="ChevronRight"
                    label="Weiter"
                    color="primary"
                    size="big"
                    :disabled="!canNext"
                    @click="next"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.slider-track {
    --gap: var(--spacing-medium);
    --per-view: var(--per-view-xs);

    display: flex;
    gap: var(--gap);
    margin: 0;
    padding: var(--spacing-small4) var(--spacing-small2);
    list-style: none;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--spacing-small2);
    scrollbar-width: none;
}

.slider-track::-webkit-scrollbar {
    display: none;
}

.slider-track:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

/* Jede Folie: so breit, dass `--per-view` Folien samt Abständen in die Spur passen */
.slider-track > :deep(*) {
    flex: 0 0 calc((100% - (var(--per-view) - 1) * var(--gap)) / var(--per-view));
    scroll-snap-align: start;
    display: flex;
}

@media (min-width: 768px) {
    .slider-track {
        --per-view: var(--per-view-sm);
    }
}

@media (min-width: 1280px) {
    .slider-track {
        --per-view: var(--per-view-lg);
    }
}

/*
 * Punkte in der Optik der primären Buttons: kantig, leicht gedreht,
 * die aktive Seite gefüllt mit versetztem schwarzem Rahmen (wie .button-standard-effect).
 * Klickfläche 24 × 24 px, sichtbares Quadrat kleiner.
 */
.slider-dot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
}

.slider-dot span {
    position: relative;
    width: 0.75rem;
    height: 0.75rem;
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-none);
    transform: rotate(-6deg);
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.slider-dot span::after {
    content: '';
    position: absolute;
    left: 2px;
    bottom: 2px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 1px solid var(--color-black);
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
}

.slider-dot:hover span {
    transform: rotate(-6deg) scale(1.15);
}

.slider-dot[aria-current='true'] span {
    background: var(--color-primary);
    transform: rotate(-6deg) scale(1.25);
}

.slider-dot[aria-current='true'] span::after {
    opacity: 1;
    left: 3px;
    bottom: 3px;
}

.slider-dot[aria-current='true']:hover span::after {
    left: 1px;
    bottom: 1px;
}

.slider-dot:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
    .slider-dot span,
    .slider-dot span::after {
        transition: none;
    }
}
</style>
