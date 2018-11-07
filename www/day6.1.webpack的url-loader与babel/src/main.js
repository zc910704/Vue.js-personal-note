import("./css/index.css")
//主要要通过路径的形式引入node_modules相关的文件，可以直接省略路径前面的node_modules的目录直接写包名和具体的路径
// 默认会从node_modules去找
import('bootstrap/dist/css/bootstrap.css')

console.log('ok')
// class关键字是ES6中提供的新语法，是用来实现ES6中面对对象编程的方式
class Person {
    // 使用static关键字可以定义静态属性
    static info = {name:'zs', age: 20}
    // 1.在webpack中只能处理一部分ES6语法，一些更高级的ES6或ES7语法不能处理，这是就需要第三方的loader来处理这些语法。
    // 通过Babel，可以帮我们完成这一转换
    // 在webpack，通过运行如下两套命令，安装两套包，安装Babel相应的loader功能；
    // 1.1第一套包：npm i babel-core babel-loader babel-plugin-transform-runtime -D
    // 1.2第二套包：npm i babel-preset-env babel-preset-stage-0 -D
    // 2.打开webpack配置文件，在module节点下的rules数组，添加如下匹配规则：
    // 2.1{ test:/\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    // 2.2注意：在配置babel的loader规则时，必须把node_modules目录通过，exclude选项排除掉，原因有两个
    // 2.2.1 避免无意义的转换
    // 2.2.2 转换完毕，项目无法正常运行
    // 3.在项目的根目录中新建一个.babelrc的babel配置文件，JSON格式。不能写注释
    // 3.1 在.babelrc写如下配置,preset可以翻译为语法的意思
    // {
    //     "presets":["env","stage-0"],
    //     "plugins":["transform-runtime"]
    // }



}
//与C# Java方式一样
var p1 = new Person()
console.log(Person.info.name)