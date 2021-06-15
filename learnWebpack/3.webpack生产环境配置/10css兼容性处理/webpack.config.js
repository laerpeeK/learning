const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
                    /*
                    Css兼容性处理： postcss --> postcss-loader postcss-preset-env
                    postcss-preset-env: 帮postcss找到package.json中browserlist里面的配置，
                                        通过配置加载指定的css兼容性样式
                    "browserslist": {
                        //开发环境->设置node环境变量：
                        "development": [
                            "last 1 chrome version",
                            "last 1 fire-fox version",
                            "last 1 safari version"
                            ],
                        "production": [
                            ">0.2%",
                            "not dead",
                            "not op_mini all"
                            ]
                        }
                     */
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
        })
    ],
    mode: "development"
}