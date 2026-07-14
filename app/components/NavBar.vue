<script lang="ts" setup>
import Button from '~/atomics/button/Button.vue';
import { navigationRoutes } from '~/statics/routes';
</script>

<template>
    <nav
        class="relative bg-backgroundDark after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div
                    class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                >
                    <div class="flex shrink-0 items-center">
                        <NuxtImg
                            src="/Logo_Adrian_Sailer_Art.png"
                            alt="Adrian Sailer Art"
                            class="h-medium2 w-auto"
                        />
                    </div>
                    <div class="hidden sm:ml-medium sm:block">
                        <div class="flex space-x-small4">
                            <template
                                v-for="(item, index) in navigationRoutes"
                                :key="index"
                            >
                                <Button>
                                    <a :href="item.path">{{
                                        item.name
                                    }}</a></Button
                                >
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
