//mint-ui使用
import Vue from 'vue'
import app from './app.vue'
// import mint from 'mint-ui'//全局导入
// import 'mint-ui/lib/style.css'
// Vue.use(mint)
// 按需导入方式如下

import { Button } from 'mint-ui'
// Vue.component('mybtn',Button)
Vue.component(Button.name,Button)
console.log(Button.name)

import 'bootstrap/dist/css/bootstrap.css'


//注意mint-UI的css组件和js组件导入的方式不同

var vm = new Vue({
    el: '#app',
    render: c => c(app),
})