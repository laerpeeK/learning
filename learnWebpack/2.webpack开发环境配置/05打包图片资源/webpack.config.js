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
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                //使用一个loader， url-loader依赖file-loader
                loader: 'url-loader',
                //配置
                options: {
                    //图片大小小于8kb,会被base64处理
                    //优点：减少请求数量
                    //缺点：图片体积会更大
                    limit: 8 * 1024,
                    //问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片为commonjs
                    //解析时会出问题： [object Module]
                    //解决: 关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                    //取hash值前10位， 文件原扩展名
                    name: '[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                //处理html文件的img图片,负责引入图片从而被url-loader处理
                loader: 'html-loader'
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