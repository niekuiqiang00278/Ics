import {createRouter, createWebHashHistory, useRoute} from 'vue-router'
import {routes} from './Page';
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
router.beforeEach((to, from, next) => {
    next()
})

export default router;