import { readdirSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import { FULLSCREEN_IMAGE_WIDTH, GALLERY_IMAGE_DIRS } from './app/statics/images';

/**
 * Wo die Seite ausgeliefert wird. Standard ist die eigene Domain adriansailer.de.
 * Für die github.io-Adresse setzt der Deploy-Workflow DEPLOY_SITE_URL und DEPLOY_BASE_URL.
 */
const siteUrl = process.env.DEPLOY_SITE_URL || 'https://adriansailer.de';
const baseURL = process.env.DEPLOY_BASE_URL || '/';

/** Vollbild-Varianten aller Galeriebilder, die der Crawler beim Generieren nicht findet */
const fullscreenImageRoutes = GALLERY_IMAGE_DIRS.flatMap((dir) =>
    readdirSync(`public/${dir}`)
        .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
        .map((file) => `/_ipx/f_webp&q_80&w_${FULLSCREEN_IMAGE_WIDTH}/${dir}/${encodeURIComponent(file)}`)
);

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
        url: siteUrl,
        name: 'Adrian Sailer Art',
        description:
            'Hochzeits-, Portrait- und Konzertfotografie aus dem Schwarzwald und Freiburg.',
        defaultLocale: 'de'
    },
    robots: {
        robotsTxt: false
    },

    // Mit Unterpfad landet die vorgerenderte Startseite sonst doppelt in der Sitemap
    sitemap: {
        exclude: baseURL === '/' ? [] : [baseURL.replace(/\/$/, ''), `${baseURL}**`]
    },

    // OG-Bilder kommen als echte Fotos aus useSocialImage(), keine generierten Bilder
    ogImage: {
        enabled: false
    },

    schemaOrg: {
        identity: {
            '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
            name: 'Adrian Sailer Art',
            url: `${siteUrl}${baseURL}`,
            description:
                'Fotograf aus dem Schwarzwald für Hochzeiten, Portraits, Regenshootings und Konzerte.',
            founder: { '@type': 'Person', name: 'Adrian Sailer' },
            sameAs: ['https://www.instagram.com/adriansailerart/'],
            email: 'adriansailer@me.com',
            priceRange: '€€',
            currenciesAccepted: 'EUR',
            address: {
                streetAddress: 'Waldkircher Strasse 32',
                postalCode: '79350',
                addressLocality: 'Sexau',
                addressRegion: 'Baden-Württemberg',
                addressCountry: 'DE'
            },
            areaServed: [
                'Freiburg im Breisgau',
                'Waldkirch',
                'Emmendingen',
                'Kaiserstuhl',
                'Schwarzwald',
                'Baden-Württemberg'
            ],
            logo: '/Logo_Adrian_Sailer_Art.png',
            image: '/adrian-sailer.jpg'
        }
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'de'
            }
        },
        pageTransition: {
            name: 'page',

            mode: 'out-in'
        },
        baseURL
    },

    nitro: {
        preset: 'github-pages',
        prerender: {
            routes: fullscreenImageRoutes
        }
    },

    image: {
        provider: 'ipx',

        // WebP mit 80 % Qualität: optisch gleich, ein Bruchteil der Dateigröße
        quality: 80,
        format: ['webp'],

        // xs für die kleinste Stufe, damit `sizes="xs:… md:…"` mobil-first greift
        screens: {
            xs: 480,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536
        },

        presets: {
            static: {
                modifiers: {
                    format: 'webp',
                    quality: 80
                }
            }
        }
    }
});
