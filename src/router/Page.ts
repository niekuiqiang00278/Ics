

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('components/Login.vue'),
    },
    {
        path: '/gPower',
        name: 'gPower',
        component: () => import('components/GPower.vue'),
    }
];