# webpack-dev-server工具的使用说明

## 安装

运行`npm i webpack-dev-server -D`把工具安装到项目本地开发依赖

## 使用

1.安装完毕后，这个工具的用法和webpack的用法完全一样。

2.由于我们在项目中本地安装，无法把他当做我们的脚本命令在powershell中直接运行（只有安装到全局-g的工具，才能在终端中正常运行）.

3.webpack-dev-server 这个工具如果要正常运行，必须要求本地项目安装webpack。

4.在package.json的script中添加`"dev": "webpack-dev-server" `。

5.执行`npm run dev`启动webpack-dev-server。

## 几点说明
1.bundle.js被托管到了根路径，直接访问/bundle.js即可访问（页面里引入的路径也应该改为根路径的bundle.js）。

2.webpack-dev-server帮助我们自动编译bundle.js自动刷新浏览器.

3.webpack-dev-server帮我们打包生成的bundle.js并没有存放在实际的物理磁盘上，而是直接托管到了电脑的内存中，所以我们在项目根目录中找不到这个打包好的bundle.js文件；

## webpack-dev-server的常用命令参数

添加在package.json中`"dev": "webpack-dev-server"`中的webpack-dev-server 后面。

- `--open` 自动打开浏览器
- `--port 80` 指定端口
- `--contentBase src` 内容的根路径
- `--hot` 热重载热更新（不重新生成bundle.js，只生成补丁代码），实现浏览器不刷新重载（否则会页面整体刷新）

## webpack-dev-server命令参数的第二种写法（不推荐）

写在webpack.config.js的module.exports的对象中添加devServer设置，必须在导入webpack后设置plugins（了解即可，不推荐的使用方式）