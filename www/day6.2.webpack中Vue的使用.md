#如何在webpack项目中，使用Vue进行开发

## 第一步：安装Vue
```
npm i vue -S

import Vue from 'vue'
```

+ import导入的Vue构造函数功能不完整，只提供了runtime-only的方式，并没有提供像网页中那样的方式

+ 回顾包的查找方式：1.查找node_modules文件夹。2.查找包名文件夹。3.查找package.json的包配置文件。4.在package.json,查找一个main属性【main指定这个包被加载时的入口文件】

使用原方式的三种解决方法，解决方式：

+ 1.修改main属性。

+ 2.直接import路径。`import Vue from 'vue/dist/vue.js'`

+ 3.在webpack.config.js中添加resolve属性,即在以vue结尾的包中按，所给的路径寻找
    ```
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    }
    ```
## 第二步： 安装loader

+ 默认无法打包vue 需要安装相应loader: `npm i vue-loader vue-template-compiler -D`

+ 新增配置项` {test:/\.vue$/, use: 'vue-loader'}`

 但是依旧错误，根据错误信息
 ```
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
```
 在webpack.config.js中解决如下：
```
 const VueLoaderPlugin = require('vue-loader/lib/plugin');
 ...
 plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
```
参考来源：[https://blog.csdn.net/cominglately/article/details/80555210](https://blog.csdn.net/cominglately/article/details/80555210)

+ 注意：vue在webpack默认中只能使用render函数渲染组件

## 总结与梳理

+ 安装Vue的包

+ 安装loader，设置rules与plugins，用于处理.vue文件

+ 在main.js中导入Vue模块

+ 定义.vue组件

+ 导入这个组件，创建页面中控制的app元素，使用render渲染

## export default 和 export的使用方式

Node中向外暴露成员的形式：
```
module.exports = {
}
```
在ES6中，也通过规范的形式，规定了如何导入和导出模块

在ES6中导入模块使用 import 模块名称 from ‘模块标识符’ 或 import ‘路径’

在ES6中，使用export default 和 export 向外暴露成员。

注意在ES6中：

- export default 向外暴露的成员可以使用任意的变量来接收，在一个模块中export default 只允许向外暴露一次

- 在一个模块中可以同时使用export default 与 export


- 接收的方式`imort m1, {title, content as content123} from './test.js'` title 为export暴露的成员


- 使用export向外暴露的成员只能使用{}形式接收，这种形式叫做按需导出，可以暴露多个成员，同时如果某些成员不需要，我们在import的{}不定义即可


- 使用export导出成员，必须严格按导出名称，可以用as 来起别名

Node中：

+ 在Node中 使用 var 名称 = require('模块标识符')

+ 使用module.exports和exports来暴露成员，不能与上面混用。

