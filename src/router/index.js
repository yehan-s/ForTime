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
        {
            path: '/setting',
            name: 'setting',
            component: () => import('@/pages/setting'),
        },
        {
            path: '/demo',
            name:'demo',
            component:() => import('@/pages/demo')
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: () => import('@/pages/signUp'),
            meta:{
                showHeader:true,
                showFooter:true
            }
        },
        {
            path: '/signIn',
            name: 'signIn',
            component: () => import('@/pages/signIn'),
            meta:{
                showHeader:true,
                showFooter:true
            }
        },

    ]
})

// const router = createRouter({
//     history: routerHistory,
//  routes
// })

export default router;