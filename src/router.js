import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        exact: true,
        component: () => import('./components/Table.vue')
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition)
            return savedPosition
        else
            return { left: 0, top: 0 };
    }
});

export default router;
