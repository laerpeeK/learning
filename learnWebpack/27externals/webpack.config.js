
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
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
    mode: "production",
    externals: {
        //库名：npm下载的包名
        //拒绝jquery包被打包
        jquery: 'jQuery',

    }
}