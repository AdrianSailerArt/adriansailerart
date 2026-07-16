<script setup lang="ts">
import { ref } from 'vue';
import Button from '~/atomics/button/Button.vue';
import type { NavigationRoute } from '~/statics/routes';
defineProps<{
    items: Array<NavigationRoute>;
}>();

const isOpen = ref(false);

const close = () => {
    isOpen.value = false;
};
</script>

<template>
    <div>
        <!-- Overlay -->
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
                class="fixed inset-0 z-dropdown flex items-center justify-center"
            >
                <!-- Blob -->
                <div
                    class="animate-blob bg-gray90"
                    :class="{
                        open: isOpen,

                        paused: isOpen
                    }"
                />

                <!-- Navigation -->
                <nav class="relative z-dropdown">
                    <ul class="flex flex-col items-center gap-8">
                        <li
                            v-for="(item, index) in items"
                            :key="item.path"
                            class="animate-fade-up"
                            :style="{
                                animationDelay: `${index * 120 + 450}ms`
                            }"
                        >
                            <NuxtLink
                                :to="item.path"
                                class="text-white uppercase font-black tracking-wider text-4xl md:text-6xl hover:text-primary transition-colors"
                                @click="close"
                            >
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Transition>

        <!-- Hamburger -->
        <Button
            class="z-dropdown w-10 h-10 flex items-center justify-center"
            @click="isOpen = !isOpen"
        >
            <div class="relative w-8 h-6">
                <span
                    class="absolute left-0 top-0 w-full h-0.5 bg-white transition-all duration-300"
                    :class="isOpen ? 'translate-y-[11px] rotate-45' : ''"
                />
                <span
                    class="absolute left-0 top-[11px] w-full h-0.5 bg-white transition-all duration-300"
                    :class="isOpen ? 'opacity-0' : ''"
                />
                <span
                    class="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300"
                    :class="isOpen ? '-translate-y-[11px] -rotate-45' : ''"
                />
            </div>
        </Button>
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
