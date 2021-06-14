/*
开发环境基础配置
指令：
webpack：输出结果 -build文件
npx webpack-dev-server: 不输出结果
样式文件：style-loader内部实现使得模块发生变化时，只会重新打包该模块
js文件： 默认无该HMR功能,需要添加支持该功能的代码,
        只能处理非入口js文件
html文件：默认无该HMR功能
    解决：修改entry入口，将html文件引入
 */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/js/index.js', './src/index.html'],
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif$)/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath: 'img'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(css|less|png|gif|jpg|html|js)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'icon'
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname,'build'),
        compress: true,
        port: 8089,
        open: true,
        //开启HMR功能
        hot: true
    },
}