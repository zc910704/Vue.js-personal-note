## url-loader处理图片与字体

当项目根目录为中文或包含中文时，则`npm init -y`初始化项目时，不加-y，手动输入英文项目名；

默认情况下，webpack无法处理css文件中的url地址，不管是图片还是字体库；

需要安装url-loader file-loader(url-loader的内部依赖，不需要配置)；

rules的写法`test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'`

url-loader会自动把图片转为base64编码，因此，我们通过在rules中向url-loader传参改变这一默认行为`url-loader?limit=1024`，limit参数为 图片使用base64编码转换的界限的字节数；

默认改变图片的名字的原因是：防止重名，可以传参改变这一默认行为`url-loader?limit=1024&name=[name].[ext]`，但为了防止重名，可以在原名字前添加hash值`url-loader?limit=1024&name=[hash:8]-[name].[ext]`，hash最大为32位，所以最大只能设为32；

webpack.config.js 的 rules中的所有loader都能传参；

## url-loader处理字体文件

首先安装bootstrap@3.3.7【4.0版本的已发布，视频中为3.x版本】

如果直接从module引入bootstrap注意设置contentBase。

需要在rules添加对字体文件的loader，否则引入bootstrap会报错。

```
{
	test:/\.(ttf|eot|svg|woff|woff2)$/,
	use:'url-loader'
}

```