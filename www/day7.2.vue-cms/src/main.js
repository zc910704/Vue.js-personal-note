import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/mui-3.7.1/dist/css/mui.min.css'
import './css/icons-extra.css'
import './fonts/mui-icons-extra.ttf'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import app from './App.vue'
import router from './router'


var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})