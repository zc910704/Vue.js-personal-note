# Vue.js-Day5-webpack
webpack文档地址：[https://www.webpackjs.com/concepts/](https://www.webpackjs.com/concepts/)
##网页中常见的静态资源
+ JS
	- .js jsx .coffee .ts (TypeScript 类似C#语言)
+ CSS
	- .css .less .sass .scss
+ Images
	- .jpg .png .gif .bmp .svg
+ Fonts
	- .svg .ttf .eot .woff .woff2
+ 模板文件
	- .ejs .jade .vue 【这是在webpack中定义组件的方式，推荐这么用】

##导致的问题

1.网页加载速度慢，因为需要二次请求；

2.要处理复杂的依赖关系

##解决方案

1.合并、压缩、精灵图、图片的Base64编码 => 处理第一个问题

2.requireJS 或 webpack解决复杂依赖关系

##什么是webpack

前端项目构建工具，基于Node.js开发

##如何完美实现上述两种解决方案

1.使用Gulp，是基于task任务的。

2.使用webpack，是基于整个项目进行构建的。

##webpack两种安装方式

1. npm i webpack -g 全局安装

2. 在项目根目录 npm i webpack --save-dev 安装到项目依赖中（webpack最新版为4，教程为3）（--save-dev参数缩写为 -D）【推荐】

3. 安装说明 ： https://segmentfault.com/a/1190000014159004

4. 安装时可能提示如下错误：
 ```
The CLI moved into a separate package: webpack-cli
Please install 'webpack-cli' in addition to webpack itself to use the CLI
```

 按照错误提示，执行`npm i webpack-cli -D`,既可以解决。

##列表隔行颜色不同的webpack例子

1.建立了目录结构后，使用npm安装jQuery：` npm init -y` 然后`npm i jquery -S`

2.写main.js后， 输入命令编译js，按照老师的命令`webpack .\src\main.js  .\dist\bundle.js`一直报错如下。

```
ERROR in multi .
Module not found: Error:
```
在Stack Overflow找到答案：https://stackoverflow.com/questions/49389677/module-not-found-error-cant-resolve-bundle-js-in-users-jonathankuhl-docum
```
webpack .\src\main.js -o .\dist\bundle.js
Hash: 5a0801d2807e49b01818
Version: webpack 4.25.0
Time: 3247ms
Built at: 2018-11-05 21:36:40
    Asset      Size  Chunks             Chunk Names
bundle.js  86.3 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[1] ./src/main.js 454 bytes {0} [built]
    + 1 hidden module

```

不知道为啥要加 -o，而视频里的不加就可以通过，遇到相同错误的可以参考一下。

bundle.js黄色代表体积过大，可能需要压缩与混淆。

通过本例子演示：webpack可以：

- 在js中引入另一个js，即能够处理js之间的互相依赖关系

- 处理JS的兼容问题，把高级的浏览器不识别的语法，转为浏览器能正常识别的语法。

- 命令格式： `webpack 要打包的文件路径 -o 打包好的输出文件路径`注意：与老师的例子不一样

##webpack.config.js文件的使用

参考webpack首页填写；