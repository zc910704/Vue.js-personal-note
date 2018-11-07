//如何在webpack项目中，使用Vue进行开发
//第一步： npm i vue -S

import Vue from 'vue'
//import导入的Vue构造函数功能不完整，只提供了runtime-only的方式，并没有提供像网页中那样的方式
// 回顾包的查找方式：1.查找node_modules文件夹。2.查找包名文件夹。
// 3.查找package.json的包配置文件。4.在package.json,查找一个main属性【main指定这个包被加载时的入口文件】
// 使用原方式的三种解决方法，解决方式：1.修改main属性。 2.import路径。
// 即：
// import Vue from 'vue/dist/vue.js'
// 或者3.
// 在webpack.config.js中添加resolve属性,即在以vue结尾的包中按，所给的路径寻找
// resolve:{
//     alias:{
//         'vue$':'vue/dist/vue.js'
//     }
// }

import login from './login.vue'
//默认无法打包vue 需要安装相应loader: npm i vue-loader vue-template-compiler -D
//新增配置项 {test:/\.vue$/, use: 'vue-loader'}
//vue在webpack中只能使用render函数


var vm = new Vue({
    el:'#app',
    render: c => c(login) //简写createElement函数
})