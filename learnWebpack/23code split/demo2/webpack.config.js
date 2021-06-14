const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'production'


module.exports = {
    //entry: './src/js/index.js',

    //多入口:有一个入口，最终输出就有一个bundle
    entry: {
      main: './src/js/index.js',
      test: './src/js/test.js'
    },
    output: {
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    /*
    1.可以将node_modules代码单独打包一个chunk输出
    2.自动分析多入口chunk中有没有公共文件（>几十kb），如果有会打包成单独的一个chunk
     */
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: 'production',
}