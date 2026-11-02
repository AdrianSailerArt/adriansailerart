<script setup lang="ts">
import { NuxtImg } from '#components';

import Hamburger from '~/atomics/button/Hamburger.vue';
import { navigationRoutes } from '~/statics/routes';
const {isOpen, setClosed} = useNavigationTrigger();
const route = useRoute();

// /people und /people/ gelten beide als aktuelle Seite
const isCurrent = (path: string) =>
    route.path === path || route.path === `${path}/`;

const { lock, unlock } = useScrollLock();

const dialog = ref<HTMLElement | null>(null);
let previouslyFocused: HTMLElement | null = null;

const getFocusable = () =>
    Array.from(
        dialog.value?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
    );

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
        setClosed();
        return;
    }

    // Fokus im Menü halten
    if (e.key !== 'Tab') return;

    const focusable = getFocusable();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!first || !last) return;

    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
};

watch(isOpen, async (open) => {
    if (!import.meta.client) return;

    if (open) {
        previouslyFocused = document.activeElement as HTMLElement | null;
        lock();
        globalThis.addEventListener('keydown', handleKeydown);

        await nextTick();
        dialog.value
            ?.querySelector<HTMLElement>('nav a')
            ?.focus({ preventScroll: true });
    } else {
        unlock();
        globalThis.removeEventListener('keydown', handleKeydown);
        previouslyFocused?.focus({ preventScroll: true });
    }
});

onUnmounted(() => {
    if (!import.meta.client) return;

    if (isOpen.value) unlock();
    globalThis.removeEventListener('keydown', handleKeydown);
});

</script>

<template>
    <div>
        
        <Transition
            enter-active-class="transition-all duration-700"
            enter-from-class="opacity-0 scale-0"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-500"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-0"
        >
            <div
                v-if="isOpen"
                id="main-menu"
                ref="dialog"
                role="dialog"
                aria-modal="true"
                aria-label="Hauptmenü"
                class="fixed inset-0 z-modal overflow-hidden"
            >
                <div
                    aria-hidden="true"
                    class="animate-blob bg-gray90"
                    :class="{
                        open: isOpen,
                        paused: isOpen
                    }"
                />

                <!-- Schließen-Button exakt an der Position des Menü-Buttons in der NavBar -->
                <div class="absolute inset-x-0 top-0 z-tooltip">
                    <div class="mx-auto max-w-7xl px-small2 lg:px-medium">
                        <div class="flex h-16 items-center justify-end">
                            <Hamburger />
                        </div>
                    </div>
                </div>

                <!-- Nur der Inhalt scrollt (kleine Displays), nicht der große Blob -->
                <div class="absolute inset-0 z-base overflow-y-auto overscroll-contain">
                    <nav
                        class="relative flex min-h-full items-center justify-center px-small4 pt-large pb-medium2"
                        aria-label="Hauptnavigation"
                    >
                        <ul class="flex flex-col items-center gap-small5 md:gap-8">
                            <li aria-hidden="true">
                                <NuxtImg
                                    preset="static"
                                    src="Logo_Adrian_Sailer_Art.png"
                                    alt=""
                                    width="160"
                                    height="160"
                                    densities="x1 x2"
                                    class="h-28 md:h-large5 w-auto"
                                />
                            </li>
                            <li
                                v-for="(item, index) in navigationRoutes"
                                :key="item.path"
                                class="animate-fade-up text-center"
                                :style="{
                                    animationDelay: `${index * 120 + 450}ms`
                                }"
                            >
                                <NuxtLink
                                    :to="item.path"
                                    :aria-current="isCurrent(item.path) ? 'page' : undefined"
                                    class="text-white uppercase font-black tracking-wider text-4xl md:text-6xl hover:text-primary focus-visible:text-primary aria-[current=page]:text-primary transition-colors"
                                    @click="setClosed"
                                >
                                    {{ item.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.animate-blob {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    transform: translate(-50%, -50%);
    animation: blob 8s linear infinite;
    animation-fill-mode: forwards;
    transition:
        width 0.8s ease,
        height 0.8s ease;
}

.animate-blob.open {
    width: 220vmax;
    height: 220vmax;
}

.paused {
    animation-play-state: paused;
}

@keyframes blob {
    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }

    25% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }

    50% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }

    75% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
}
.animate-fade-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 0.7s forwards;
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
