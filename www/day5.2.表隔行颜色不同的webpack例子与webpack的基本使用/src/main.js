//这是main.js，是我们项目的JS入口文件
//1.导入JQuery包
//import *** from *** 是ES6中导入模块的方式
//由于ES6的代码太高级了，浏览器无法解析，所以这一行执行会有报错 利用webpack ./src/main.js ./dist/bundle.js来处理不能直接执行的命令
import $ from 'jquery' //从Node_modules导入jquery这个包，用$来接收
//等于node中const $ = require("jquery") //浏览器也不支持require语言


//入口函数
$(function(){
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function(){
        return '#' + 'D97634'
    })
})