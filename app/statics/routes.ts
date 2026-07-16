export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    WEDDING: '/wedding',
    COSPLAY: '/cosplay',
    PEOPLE: '/people',
    IMPRESSUM: '/impressum',
    DATA_SECURITY: '/datenschutz'
} as const;

type RouteName = (typeof ROUTES)[keyof typeof ROUTES];

type NavigationRoute = {
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
        name: 'Wedding',
        icon: 'heart',
        path: ROUTES.WEDDING
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
