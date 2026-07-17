<script lang="ts" setup>
import Hamburger from '~/atomics/button/Hamburger.vue';
</script>

<template>
    <nav
        class="relative bg-background after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
        <div class="mx-auto max-w-7xl px-small2 lg:px-medium">
            <div class="relative flex h-16 items-center justify-between">
                <div
                    class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                >
                    <div class="flex items-center justify-between">
                        <NuxtImg
                            src="/Logo_Adrian_Sailer_Art.png"
                            alt="Adrian Sailer Art"
                            class="h-medium4 w-auto"
                        />
                    </div>
                </div>
                <Hamburger />
            </div>
        </div>
    </nav>
</template>
