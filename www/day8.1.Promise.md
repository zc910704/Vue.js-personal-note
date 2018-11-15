## 封装一个读取文件的函数(回调的演示)
```
const fs = require('fs')
const path = require('path')

function getFileByPath(fpath){
	fs.readFile(fpath, 'utf-8', (err, dataStr)={
    	if(err) throw err
        return dataStr
    })
}

var res = getFileByPath(path.join(__dirname, './1.txt') )
console.log(res)

```
fs.readFile函数为异步函数，getFileByPath没有return将返回undefined 因此需要添加回调。
```
function getFileByPath(fpath, callback){
	fs.readFile(fpath, 'utf-8', (err, dataStr)={
    	if(err) return callback(err)
        callback(null, dataStr)
    })
}

var res = getFileByPath(path.join(__dirname, './1.txt'),(err, dataStr){
	if(err) return console.log(err.message)
	console.log(dataStr)
} )
console.log(res)

```
成功与失败的回调放在一起不好理解，因此拆分开

```
function getFileByPath(fpath, successCallback, errCallback){
	fs.readFile(fpath, 'utf-8', (err, dataStr)={
    	if(err) return errCallback(err)
        successCallback(dataStr)
    })
}

getFileByPath(path.join(__dirname, './1.txt'),(data){
	console.log(data)
}, (err){
	console.log(err.message)
} 
)

```

需求：按顺序读取三个文件：此时将会出现嵌套的回调即回调地狱
因此，我们将用ES6中的promise对象解决这一问题
promise的本质：单纯的解决回调地狱问题，并不能解决代码量。

## Promise概念介绍
1. Promise 是一个构造函数，可以new 得到一个实例，他有
	+ resolve：成功之后的回调函数
	+ reject ：失败之后的回调函数

2. 在Promise的构造函数的prototype属性，有.then()方法
3. Promise表示一个异步操作，每当我们new一个Promise对象，就表示了一个具体的异步操作
4. 异步操作有两种状态：
	+ 异步执行成功，内部调用resolve
	+ 异步执行失败，内部调用reject
5. 由于Promise是一个异步的实例，因此无法return（会得到 undefined），只能通过回调函数的形式返回给调用者
6. 我们可以在new出来的Promise实例对象上，调用.then方法，== 预先 ==为这个Promise指定成功和失败的回调函数

## Promise的写法
基本写法：
```
var promise = new Promise(function(){
	//异步操作
})

```
每当new一个Promise对象，就会立即调用传递的异步函数。因此在实际使用中，我们会如下构造代码片段。

```
function getFileByPath(fpath){
	return new Promise(function(resolve,reject){
        fs.readFile(fpath, 'utf-8', (err, dataStr)=>{
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}

getFileByPath(path.join(__dirname, './1.txt').then(
    function(data){
		console.log(data)
    },
    function(err){
		console.log(err.message)
    },
)
```

+ resole必须传，reject可以省略。
+ promise解决回调地狱的正确书写格式如下(把嵌套形式改写为串联形式)（1、2、分别对应两种需求）：

```
getFileByPath(path1)
.then(function(data){
//action1
return getFileByPath(path2)
})//1.如果有发生错误继续进行的需要则应，指定每个Promise的reject错误回调
.then(function(data){
//action2
return getFileByPath(path3)
})
.......
.catch((err)=>{  //2.如果有一旦发生错误就终止的情况应该在结尾捕获错误
console.log(err.message)
})
```
+ resolve和reject只会执行一个，如果在promise构造时内部没有定义，则都不会执行

[在线流程图与测试](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
