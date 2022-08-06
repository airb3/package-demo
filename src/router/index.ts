import { createRouter, createWebHashHistory } from "vue-router";
const Index = () => import("../views/Index.vue")
const VodUpload = () => import("../views/VodUpload.vue")
const TCPlayer = () => import("../views/TCPlayer.vue")

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/vod',
        name: 'vod',
        component: VodUpload
    },
    {
        path: '/video',
        name: 'video',
        component: TCPlayer
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;