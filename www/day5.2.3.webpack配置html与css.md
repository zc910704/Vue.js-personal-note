## html-webpack-plugin插件

在内存中生成html页面的插件

### 安装

1.`npm i html-webpack-plugin -D`
2.在webpack.config.js导入插件

### 优点

- 指定生成页面的名称，重名即可，会自动访问同名的内存的页面。
- 当使用了这个插件后，我们不需要手动引入bundle.js,插件会自动处理bundle.js的引用

## webpack中使用CSS

1. 在main.js中import CSS样式表，webpack默认只能打包JS类型的文件，需要手动安装一些合适的第三方loader加载器。
2. 如果需要打包处理css文件，需要安装style-loader css-loader

    ```
    npm i style-loader css-loader -D
    ```
3. 打开webpack.config.js这个配置文件，新增一个配置节点，叫module,他是一个对象；在这个module上，有个rules属性，是个数组，这个数组存放了所有第三方文件的匹配和处理规则；
	```
    module:{//这个节点用于配置所有第三方模块加载器
       rules: [ //所有第三方模块的匹配规则
          {test:/\.css$/,use:['style-loader','css-loader'] }//test为正则表达式的匹配，匹配处理css文件的第三方loader规则
    ]
  }
	```
### webpack处理第三方文件的过程

- 发现处理的文件不是JS，就去配置文件查找有没有对应的第三方loader规则；

- 如果能发现对应的规则，就会调用对应的loader处理这种文件类型；

- style-loader 与 css-loader 调用规则是从右到左调用。

- 当最后的一个loader调用完毕，会把处理的结果交给webpack进行打包合并，最终打包构件；

LESS与SCSS文件的处理暂待补充（因为都不会）