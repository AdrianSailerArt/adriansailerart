export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    WEDDING: '/wedding',
    COSPLAY: '/cosplay',
    CONCERTS: '/concerts',
    BAND_PHOTOGRAPHY: '/band-photography',
    PEOPLE: '/people',
    CONTACT: '/contact',
    NATURE: '/nature',
    PHOTO_SPOTS_FREIBURG: '/photo-spots/freiburg',
    IMPRESSUM: '/impressum',
    DATA_SECURITY: '/datenschutz'
} as const;

type RouteName = (typeof ROUTES)[keyof typeof ROUTES];

export type NavigationRoute = {
    name: string;
    icon?: string;
    path: RouteName;
};
export const navigationRoutes: Array<NavigationRoute> = [
    {
        name: 'Home',
        icon: 'home',
        path: ROUTES.HOME
    },
    {
        name: 'About',
        icon: 'info',
        path: ROUTES.ABOUT
    },
    {
        name: 'Hochzeiten',
        icon: 'heart',
        path: ROUTES.WEDDING
    },
    {
        name: 'Musik & Artist',
        icon: 'mask',
        path: ROUTES.CONCERTS
    },
    {
        name: 'People',
        icon: 'mask',
        path: ROUTES.PEOPLE
    },
    {
        name: 'Cosplay',
        icon: 'mask',
        path: ROUTES.COSPLAY
    },
    {
        name: 'Natur',
        icon: 'tree',
        path: ROUTES.NATURE
    },
    {
        name: 'Kontakt',
        icon: 'mail',
        path: ROUTES.CONTACT
    }
];

export const footerNavigation: Array<NavigationRoute> = [
    {
        name: 'Impressum',
        path: ROUTES.IMPRESSUM
    },
    {
        name: 'Datenschutz',
        path: ROUTES.DATA_SECURITY
    }
];
