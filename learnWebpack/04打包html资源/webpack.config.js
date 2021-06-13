/*
plugins: 下载引入使用
 */
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //复制该html文件,并自动引入打包的所有资源(JS/CSS)
            template: "./src/index.html"
        })
    ],
    mode: "development"
}