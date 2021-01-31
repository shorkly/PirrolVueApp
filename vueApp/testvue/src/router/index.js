import Vue from 'vue'
import VueRouter from 'vue-router'
import Piroll from '../views/Piroll.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Piroll',
        component: Piroll
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contact.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router