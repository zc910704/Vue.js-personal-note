import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) 

import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

var router = new VueRouter({
    routes: [{
            path: '/account',
            component: account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register},
            ]
        },
        {
            path: '/goodslist',
            component: goodslist
        }
    ]
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
import login from './subRouter/login.vue'
import register from './subRouter/register.vue'


var vm = new Vue({
    el: '#app2',
    render: c => c(app),
    router
})