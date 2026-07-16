<script lang="ts" setup>
import { navigationRoutes } from '~/statics/routes';
</script>

<template>
    <nav
        class="relative bg-background  after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
        <div class="mx-auto max-w-7xl px-small2  lg:px-medium">
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
                   
                </div> <BlobMenu :items="navigationRoutes" />
            </div>
        </div>
    </nav>
</template>
