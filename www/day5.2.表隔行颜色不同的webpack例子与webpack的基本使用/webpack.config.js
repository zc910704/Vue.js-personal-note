const path = require('path');
//第二种方式配置webpack-dev-server需要导入
const webpack = require('webpack')
//导入内存中生成html的插件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  /* webpack-dev-server命令参数的第二种写法 */
  // devServer:{
  //   open:true,//自动打开浏览器
  //   port: 3000,
  //   contentBase:'src',
  //   hot:true //启用热更新的第一步，必须在导入webpack后设置plugins
  // },
  plugins: [ //注意webpack带s的是数组，与vue不同,这是第二种方法启用热更新的第三步
    //new webpack.HotModuleReplacementPlugin()
    new htmlWebpackPlugin({ //创建一个在内存中生成HTML页面的插件
      template: path.join(__dirname, './src/index.html'), //指定模板页面
      filename: 'index.html'
      /*  指定生成页面的名称，重名即可，会自动访问同名的内存的页面，当使用了这个插件后，我们不需要手动引入bundle.js
            插件会处理bundle.js的引用路径， */
    })
  ],
  module: { //这个节点用于配置所有第三方模块加载器
    rules: [ //所有第三方模块的匹配规则
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      } //test为正则表达式的匹配，匹配处理css文件的第三方loader规则
    ]
  }
};