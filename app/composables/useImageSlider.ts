import { computed, ref, type Ref } from 'vue';

export function useImageSlider<T>(items: T[] | Ref<T[]>, initialIndex = 0) {
    const activeIndex = ref(initialIndex);

    const getItems = () => (Array.isArray(items) ? items : items.value);

    const count = computed(() => getItems().length);
    const currentItem = computed(() => getItems()[activeIndex.value]);

    const next = () => {
        if (count.value === 0) return;

        activeIndex.value = (activeIndex.value + 1) % count.value;
    };

    const prev = () => {
        if (count.value === 0) return;

        activeIndex.value = (activeIndex.value - 1 + count.value) % count.value;
    };

    const isDragging = ref(false);
    const startX = ref(0);
    const endX = ref(0);
    const minSwipeDistance = 50;

    const handlePointerDown = (e: PointerEvent) => {
        if (e.button !== 0) return;

        isDragging.value = true;
        startX.value = e.clientX;
        endX.value = 0;

        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
        if (!isDragging.value) return;

        endX.value = e.clientX;
        e.preventDefault();
    };

    const handlePointerUp = (e: PointerEvent) => {
        if (!isDragging.value) return;

        isDragging.value = false;
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);

        if (endX.value === 0) return;

        const distance = startX.value - endX.value;

        if (distance > minSwipeDistance) {
            next();
        } else if (distance < -minSwipeDistance) {
            prev();
        }
    };

    const handlePointerLeave = (e: PointerEvent) => {
        if (isDragging.value) handlePointerUp(e);
    };

    return {
        activeIndex,
        currentItem,
        next,
        prev,
        isDragging,
        swipeHandlers: {
            pointerdown: handlePointerDown,
            pointermove: handlePointerMove,
            pointerup: handlePointerUp,
            pointerleave: handlePointerLeave
        }
    };
}
