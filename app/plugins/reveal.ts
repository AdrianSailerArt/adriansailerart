/**
 * v-reveal: blendet Elemente beim Scrollen sanft ein.
 * Optionaler Wert = Verzögerung in ms (z. B. v-reveal="120").
 */
export default defineNuxtPlugin((nuxtApp) => {
    let observer: IntersectionObserver | null = null;

    const getObserver = () => {
        if (observer) return observer;

        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;

                    const target = entry.target as HTMLElement;

                    target.classList.add('is-visible');
                    observer?.unobserve(target);

                    // Nach dem Einblenden aufräumen, damit Hover-Effekte wieder greifen
                    const cleanup = (event: TransitionEvent) => {
                        if (event.target !== target || event.propertyName !== 'opacity') return;

                        target.classList.remove('reveal', 'is-visible');
                        target.style.removeProperty('--reveal-delay');
                        target.removeEventListener('transitionend', cleanup);
                    };

                    target.addEventListener('transitionend', cleanup);
                }
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
        );

        return observer;
    };

    nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
        mounted(el, binding) {
            if (
                !('IntersectionObserver' in window) ||
                window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ) {
                return;
            }

            if (binding.value) {
                el.style.setProperty('--reveal-delay', `${binding.value}ms`);
            }

            el.classList.add('reveal');
            getObserver().observe(el);
        },
        unmounted(el) {
            observer?.unobserve(el);
        },
        getSSRProps() {
            return {};
        }
    });
});
