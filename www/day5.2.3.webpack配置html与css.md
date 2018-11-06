##html-webpack-plugin插件

在内存中生成html页面的插件

###安装

1.`npm i html-webpack-plugin -D`
2.在webpack.config.js导入插件

###优点

- 指定生成页面的名称，重名即可，会自动访问同名的内存的页面。
- 当使用了这个插件后，我们不需要手动引入bundle.js,插件会自动处理bundle.js的引用