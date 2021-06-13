const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')


//设置nodejs环境变量
process.env.NODE_ENV = 'development'

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    //创建style标签， 将样式放上去
                    // 'style-loader',
                    //提取js中的css成单独文件
                    MiniCssExtractPlugin.loader,
                    //将css文件整合到js文件中
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                //postcss插件
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            //对输出文件进行重命名
            filename: 'css/built.css'
        }),
        //压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: "development"
}