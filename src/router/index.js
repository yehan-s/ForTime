import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('@/pages/communication')
        },
        {
            path: '/communication',
            component: () => import('@/pages/communication'),
        },
        {
            path: '/loginInfo',
            component: () => import('@/pages/loginInfo'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/pages/about'),
        },
        {
            path: '/userSpace',
            name: 'userSpace',
            component: () => import('@/pages/userSpace'),
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: () => import('@/pages/userInfo'),
        },

    ]
})



export default router;