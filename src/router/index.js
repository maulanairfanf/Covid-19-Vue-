import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Saved from '../views/Saved.vue'
import Country from '../views/Country.vue'
import Prevent from '../views/Prevent.vue'
import Impact from '../views/Impact.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/saved',
        name: 'saved',
        component: Saved
    }, {
        path: '/country/:name',
        name: 'country',
        component: Country
    }, {
        path: '/prevent',
        name: 'prevent',
        component: Prevent
    }, {
        path: '/impact',
        name: 'impact',
        component: Impact
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router