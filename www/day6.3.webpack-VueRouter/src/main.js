import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) //参考VueRouter官方文档

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
/* 路由使用 */
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
import login from './subRouter/login.vue'
import register from './subRouter/register.vue'


/* 路由嵌套 */

var vm = new Vue({
    el: '#app2',
    render: c => c(app),
    router
})