import { ref, type Ref } from 'vue';

export function usePinchZoom(el: Ref<HTMLElement | null>) {
    const scale = ref(1);
    const translateX = ref(0);
    const translateY = ref(0);

    let initialDistance = 0;
    let initialScale = 1;
    let lastTouchX = 0;
    let lastTouchY = 0;
    let isPanning = false;

    const getDistance = (touches: TouchList) => {
        const dx = (touches[0]?.clientX ?? 0) - (touches[1]?.clientX ?? 0);
        const dy = (touches[0]?.clientY ?? 0) - (touches[1]?.clientY ?? 0);

        return Math.sqrt(dx * dx + dy * dy);
    };

    const reset = () => {
        scale.value = 1;
        translateX.value = 0;
        translateY.value = 0;
    };

    const onTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 2) {
            initialDistance = getDistance(e.touches);
            initialScale = scale.value;
        } else if (e.touches.length === 1 && scale.value > 1) {
            isPanning = true;
            lastTouchX = e.touches[0]?.clientX ?? 0;
            lastTouchY = e.touches[0]?.clientY ?? 0;
        }
    };

    const onTouchMove = (e: TouchEvent) => {
        e.preventDefault();

        if (e.touches.length === 2) {
            const distance = getDistance(e.touches);
            const newScale = Math.min(
                Math.max(initialScale * (distance / initialDistance), 1),
                4
            );
            scale.value = newScale;
        } else if (e.touches.length === 1 && isPanning) {
            translateX.value += e.touches[0]?.clientX ?? 0 - lastTouchX;
            translateY.value += e.touches[0]?.clientY ?? 0 - lastTouchY;
            lastTouchX = e.touches[0]?.clientX ?? 0;
            lastTouchY = e.touches[0]?.clientY ?? 0;
        }
    };

    const onTouchEnd = (e: TouchEvent) => {
        if (e.touches.length < 2) isPanning = false;

        if (scale.value <= 1) reset();
    };

    const onDblTap = () => {
        scale.value > 1 ? reset() : (scale.value = 2);
    };

    const bind = () => {
        const target = el.value;

        if (!target) return;

        target.addEventListener('touchstart', onTouchStart, { passive: false });
        target.addEventListener('touchmove', onTouchMove, { passive: false });
        target.addEventListener('touchend', onTouchEnd);
        target.addEventListener('dblclick', onDblTap);
    };

    const unbind = () => {
        const target = el.value;

        if (!target) return;

        target.removeEventListener('touchstart', onTouchStart);
        target.removeEventListener('touchmove', onTouchMove);
        target.removeEventListener('touchend', onTouchEnd);
        target.removeEventListener('dblclick', onDblTap);
    };

    return { scale, translateX, translateY, reset, bind, unbind };
}
