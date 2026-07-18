<script setup lang="ts">
import { NuxtImg } from '#components';

import Hamburger from '~/atomics/button/Hamburger.vue';
import { navigationRoutes } from '~/statics/routes';
const {isOpen, setClosed} = useNavigationTrigger();


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
                class="fixed inset-0 z-modal flex items-center justify-center"
            >
            <div class="absolute right-small top-small" >
               <Hamburger /></div>
                <div
                    class="animate-blob bg-gray90"
                    :class="{
                        open: isOpen,
                        paused: isOpen
                    }"
                />

                <nav class="relative z-modal">
                    
                    <ul class="flex flex-col items-center gap-8">
                        <li>
                            <NuxtImg
                                src="/Logo_Adrian_Sailer_Art.png"
                                alt="Adrian Sailer Art"
                                class="h-large5 w-auto"
                            />
                        </li>
                        <li
                            v-for="(item, index) in navigationRoutes"
                            :key="item.path"
                            class="animate-fade-up"
                            :style="{
                                animationDelay: `${index * 120 + 450}ms`
                            }"
                        >
                            <NuxtLink
                                :to="item.path"
                                class="text-white uppercase font-black tracking-wider text-4xl md:text-6xl hover:text-primary transition-colors"
                                @click="setClosed"
                            >
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
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
