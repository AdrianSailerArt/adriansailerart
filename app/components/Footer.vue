<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';
import { footerNavigation } from '~/statics/routes';
</script>
<template>
    <footer class="bg-background py-medium2 md:py-medium3">
        <div class="mx-auto max-w-7xl px-small2 lg:px-medium">
            <div
                class="flex flex-col items-center justify-between gap-4 md:flex-row"
            >
                <Text>
                    © {{ new Date().getFullYear() }} Adrian Sailer Art. All
                    rights reserved.
                </Text>
                <ul class="flex gap-small4">
                    <li v-for="item in footerNavigation" :key="item.path">
                        <NuxtLink :to="item.path">
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                </ul>
                <Text> Made with ❤️ by Adrian Sailer </Text>
            </div>
        </div>
    </footer>
</template>
