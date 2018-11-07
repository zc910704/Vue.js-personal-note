`` # Babel安装与说明

在webpack中只能处理一部分ES6语法，一些更高级的ES6或ES7语法不能处理，这是就需要第三方的loader来处理这些语法。

通过Babel，可以帮我们完成这一转换。

# 安装

+ 在webpack，通过运行如下两套命令，安装两套包，安装Babel相应的loader功能；

	- 第一套包：`npm i babel-core babel-loader babel-plugin-transform-runtime -D`

	- 第二套包：`npm i babel-preset-env babel-preset-stage-0 -D`

+ 打开webpack配置文件，在module节点下的rules数组，添加如下匹配规则：

	- `{ test:/\.js$/, use: 'babel-loader', exclude: /node_modules/ }`

	- 注意：在配置babel的loader规则时，必须把node_modules目录通过，exclude选项排除掉，原因有两个:

		- 避免无意义的转换

		- 转换完毕，项目无法正常运行

+ 在项目的根目录中新建一个.babelrc的babel配置文件,(这个配置文件也可以在`use: 'babel-loader'`同级的option中定义)，JSON格式，不能写注释。

    - 在.babelrc写如下配置
    ```
        {
            "presets":["env","stage-0"],
            "plugins":["transform-runtime"]
        }
    ```
== 但是上述过程实测会报错。 ==

+ 原因是：已经8102年了，babel-loader已经升级到了 8.x。解决办法是，`npm uninstall -D babel-loader`卸载babel-loader后，必须指定`npm install -D babel-loader@7`的版本安装。

+ 上述安装的各包中，实测去除babel-plugin-transform-runtime的引用不会报错，但babel-preset-stage-0必须安装配置，否则一定报错。

+ 具体见babel-loader的[GitHub主页](https://github.com/babel/babel-loader)