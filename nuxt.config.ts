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

    // Nur die Domain – der Pfad /adriansailerart/ kommt aus app.baseURL
    site: {
        url: 'https://adriansailerart.github.io',
        name: 'Adrian Sailer Art',
        description:
            'Hochzeits-, Portrait- und Konzertfotografie aus dem Schwarzwald und Freiburg.',
        defaultLocale: 'de'
    },
    robots: {
        robotsTxt: false
    },

    // Die vorgerenderte Startseite /adriansailerart/ landet sonst doppelt in der Sitemap
    sitemap: {
        exclude: ['/adriansailerart', '/adriansailerart/**']
    },

    // OG-Bilder kommen als echte Fotos aus useSocialImage(), keine generierten Bilder
    ogImage: {
        enabled: false
    },

    schemaOrg: {
        identity: {
            '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
            name: 'Adrian Sailer Art',
            url: 'https://adriansailerart.github.io/adriansailerart/',
            description:
                'Fotograf aus dem Schwarzwald für Hochzeiten, Portraits, Regenshootings und Konzerte.',
            founder: { '@type': 'Person', name: 'Adrian Sailer' },
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
        baseURL:
            process.env.NODE_ENV === 'production' ? '/adriansailerart/' : '/'
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
