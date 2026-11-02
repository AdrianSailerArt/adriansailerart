<script setup lang="ts">
import Text from '~/atomics/text/Text.vue';
import { footerNavigation } from '~/statics/routes';
import { contactInformation } from '~/resources/contactInformation';
</script>
<template>
    <footer class="bg-background py-medium2 md:py-medium3">
        <div class="mx-auto max-w-7xl px-small2 lg:px-medium">
            <div
                class="flex flex-col items-center justify-between gap-4 md:flex-row text-center md:text-left"
            >
                <Text>
                    © {{ new Date().getFullYear() }} Adrian Sailer Art. All
                    rights reserved.
                </Text>
                <nav aria-label="Rechtliches und Kontakt">
                    <ul class="flex flex-wrap justify-center gap-small4">
                        <li>
                            <a
                                :href="`mailto:${contactInformation.mail}`"
                                class="footer-link"
                            >
                                Kontakt
                            </a>
                        </li>
                        <li v-for="item in footerNavigation" :key="item.path">
                            <NuxtLink :to="item.path" class="footer-link">
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <Text>
                    Made with <span role="img" aria-label="Liebe">❤️</span> by
                    Adrian Sailer
                </Text>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-link {
    text-underline-offset: 3px;
}

.footer-link:hover,
.footer-link:focus-visible {
    text-decoration: underline;
}
</style>
