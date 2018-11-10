import VueRouter from 'vue-router'

import home from './components/HomeContainer.vue'
import member from './components/MemberContainer.vue'
import cart from './components/CartContainer.vue'
import search from './components/SearchContainer.vue'

var router = new VueRouter({
    routes: [{
            path: '/home',
            component: home
        },
        {
            path: '/member',
            component: member
        },
        {
            path: '/cart',
            component: cart
        },
        {
            path: '/search',
            component: search
        }
    ],
    linkActiveClass: 'mui-active'
})

export default router