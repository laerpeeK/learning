const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


/*

 */


module.exports = {
    entry: './src/index.js',
    output: {
        //指定名称+目录
        filename: '[name].js',
        //输出文件目录（将来所有资源输出的公共目录）
        path: resolve(__dirname,'build'),
        //所有资源的引入公共路径前缀 -->路径的前面  服务器下
        // publicPath: "/",
        //非入口chunk的文件名称
        chunkFilename: "[name]_chunk.js",
        //
        library: '[name]', //整个库向外暴露的变量名
        libraryTarget: "window", //变量名添加到哪个属性上： browser global commonjs
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}