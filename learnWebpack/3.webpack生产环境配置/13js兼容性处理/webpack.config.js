const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            /*
            js兼容性处理： babel-loader
            babel-loader @babel/preset-env
            问题：只能转换基本语法，如Promise不能转换
            2.全部兼容性处理 import 'babel/polyfill'
            问题：引入所有兼容性代码,体积太大
            3.按需下载

             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    //预设：指示babel做怎么样的兼容性处理
                    presets: [
                        ['@babel/preset-env',
                        {
                            //按需下载
                            useBuiltIns: 'usage',
                            //指定core-js版本
                            corejs: {
                                version: 3.14

                            },
                            targets: {
                                chrome: '60',
                                firefox: '60',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            }
                        }    
                    ],
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: 'development'
}