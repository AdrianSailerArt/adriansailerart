import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue';

/**
 * Logik für einen horizontalen Slider auf Basis von CSS Scroll Snap.
 * Wischen, Trackpad und Pfeiltasten (bei fokussierter Spur) funktionieren nativ,
 * das Composable ergänzt Vor/Zurück, Seitenzahl und Sprung zu einer Seite.
 *
 * Eine „Seite“ ist eine sichtbare Breite der Spur. Bei reduzierter Bewegung wird ohne Animation gesprungen.
 */
export const useSlider = (track: Ref<HTMLElement | null>) => {
    const page = ref(0);
    const pageCount = ref(1);
    const canPrev = ref(false);
    const canNext = ref(false);

    const update = () => {
        const el = track.value;
        if (!el) return;

        const maxScroll = el.scrollWidth - el.clientWidth;

        pageCount.value = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth - 0.01));
        // Am Ende zählt immer die letzte Seite, auch wenn sie nur teilweise gefüllt ist
        page.value = el.scrollLeft >= maxScroll - 2
            ? pageCount.value - 1
            : Math.round(el.scrollLeft / el.clientWidth);
        canPrev.value = el.scrollLeft > 2;
        canNext.value = el.scrollLeft < maxScroll - 2;
    };

    const scrollBehavior = (): ScrollBehavior =>
        globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

    const goTo = (target: number) => {
        const el = track.value;
        if (!el) return;

        const clamped = Math.min(Math.max(target, 0), pageCount.value - 1);
        el.scrollTo({ left: clamped * el.clientWidth, behavior: scrollBehavior() });
    };

    const next = () => goTo(page.value + 1);
    const prev = () => goTo(page.value - 1);

    let resizeObserver: ResizeObserver | null = null;

    onMounted(() => {
        const el = track.value;
        if (!el) return;

        el.addEventListener('scroll', update, { passive: true });
        resizeObserver = new ResizeObserver(update);
        resizeObserver.observe(el);
        update();
    });

    onBeforeUnmount(() => {
        track.value?.removeEventListener('scroll', update);
        resizeObserver?.disconnect();
    });

    return { page, pageCount, canPrev, canNext, next, prev, goTo };
};
