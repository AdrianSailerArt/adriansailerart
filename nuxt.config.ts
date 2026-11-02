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
        url: 'https://adriansailer.de',
        name: 'Adrian Sailer Art',
        description:
            'Hochzeits-, Portrait- und Konzertfotografie aus dem Schwarzwald und Freiburg.',
        defaultLocale: 'de'
    },
    robots: {
        robotsTxt: false
    },

    // OG-Bilder kommen als echte Fotos aus useSocialImage(), keine generierten Bilder
    ogImage: {
        enabled: false
    },

    schemaOrg: {
        identity: {
            '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
            name: 'Adrian Sailer Art',
            url: 'https://adriansailer.de/',
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
        // Eigene Domain adriansailer.de – die Seite liegt direkt im Root
        baseURL: '/'
    },

    nitro: {
        preset: 'github-pages'
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
