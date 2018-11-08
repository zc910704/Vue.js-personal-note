import Vue from 'vue'

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

import './lib/mui-3.7.1/dist/css/mui.min.css'

import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app)
})