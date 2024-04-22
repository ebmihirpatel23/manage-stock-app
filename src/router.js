import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/manage-stocks",
    },
    {
        path: "/old-home",
        name: "home",
        exact: true,
        component: () => import("./components/Table.vue"),
    },
    {
        path: "/manage-stocks",
        component: () => import("./pages/ManageStockPage.vue"),
    },
    {
        path: "/:catchAll(.*)*",
        component: () => import("./pages/NotFoundPage.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { left: 0, top: 0 };
    },
});

export default router;
