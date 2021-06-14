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
    devtool: 'source-map'
}
/*
source-map: 一种提供源代码到构建后代码的映射技术
            如果构建后代码出错可以追踪源代码错误
            错误代码准确信息， 源代码的错误
  [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
    inline-source-map: 内联，只生成一个内联的source-map 错误代码准确信息， 源代码的错误
    hidden-source-map：外部 不能追踪源代码错误 不能追踪源代码错误，只能提示到构建后代码的错误位置
    eval-souce-map: 内联, 每一个文件都生成对应的source-map，均在eval函数中 错误代码准确信息， 源代码的错误
    nosources-source-map: 外部 错误代码准确信息,没有任何源代码信息
    cheap-source-map: 外部  精确到行 错误代码准确信息， 源代码的错误位置
    cheap-module-source-map: 外部  精确到行 错误代码准确信息， 源代码的错误位置
                             会将loader的source-map加入
内联跟外部的区别：
    1.外部生成文件
    2.内联构建速度更快


    开发环境：

    速度： eval>inline>cheap>...
        eval-cheap-source-map
        eval-source-map

    调试：
    source-map
    cheap-module-source-map
    cheap-source-map

    ---》 eval-source-map / eval-cheap-module-source-map
    生产环境：
    内联会让代码体积变大，一般采用外部
    none-source-map 全部隐藏
    hidden-source-map 只隐藏源代码，会提示构建后代码

    source-map
 */