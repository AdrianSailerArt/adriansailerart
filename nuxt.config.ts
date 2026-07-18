import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    devtools: {
        enabled: true
    },

    ssr: true,

    css: ['~/assets/css/main.css', '~/assets/css/tailwind.generated.css'],

    vite: {
        plugins: [tailwindcss()]
    },

    modules: ['@nuxt/a11y', '@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/seo'],

    site: {
        url: 'https://adriansailerart.github.io/adriansailerart',
        name: 'Adrian Sailer Art'
    },
    robots: {
        robotsTxt: false
    },
    app: {
         pageTransition: {

        name: 'page',

        mode: 'out-in'

    },
        baseURL:
            process.env.NODE_ENV === 'production' ? '/adriansailerart/' : '/'
    },

    nitro: {
        preset: 'github-pages'
    },

    image: {
        provider: 'ipx',

        presets: {
            static: {
                modifiers: {
                    format: undefined
                }
            }
        }
    }
});
