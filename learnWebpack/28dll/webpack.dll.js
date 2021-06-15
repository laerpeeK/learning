/*
使用dll技术对某些库（一般指第三方库）进行单独打包
当你运行webpack时，默认查找webpack.config.js
需求：需要运行webpack.dll.js
    webpack --config webpack.dll.js
 */

const {resolve} = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        //最终打包生成的[name] --> jquery
        //['jquery'] --> 要打包的库式jquery
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname,'dll'),
        library: '[name]_[hash]',//打包的库向外暴露出的内容叫什么名字
    },
    plugins: [
        //打包生成一个manifest.json --> 提供jquery映射
        new webpack.DllPlugin({
            name: '[name]_[hash]', //映射库的暴露内容名称
            path: resolve(__dirname, 'dll/manifest.json')//输出名称
        })
    ],
    mode: 'production'
}