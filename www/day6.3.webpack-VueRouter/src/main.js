import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) //参考VueRouter官方文档

import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

var router = new VueRouter({
    routes: [{
            path: '/account',
            component: account
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