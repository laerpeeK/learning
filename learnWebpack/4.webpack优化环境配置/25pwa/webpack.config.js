const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin  = require('optimize-css-assets-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
/*
    PWA:渐进式网络开发应用程序（离线可访问）
    workbox --> workbox-webpack-plugin
 */
//定义Nodejs的环境变量：决定使用browserslist哪个环境
process.env.NODE_ENV = 'production'

//复用loader
const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        //需要在package.json中定义browserslist
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [
                require('postcss-preset-env')()
            ]
        }
    }
]

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.[contenthash:10].js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                //在package.json中eslintConfig -- JavaScript书写规范(airbnb)
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            {
                //以下loader只会选择一个，
                //注意：不能同时匹配多个
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [...commonCssLoader]
                    },//css
                    {
                        test: /\.less$/,
                        use: [
                            ...commonCssLoader,
                            'less-loader',
                        ]
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        options: {
                            presets:[
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns: 'usage',
                                        corejs:{
                                            version: 3.14
                                        },
                                        targets: {
                                            chrome: '60',
                                            firefox: '50',

                                        }
                                    }
                                ]
                            ],
                            //开启babel缓存，第二次构建时，会读取之前的缓存
                            cacheDirectory: true
                        }
                    },
                    {
                        test: /\.(jpg|png|gif)/,
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[hash:10].[ext]',
                            outputPath: 'img',
                            esModule: false,
                            publicPath: '../img'
                        }
                    },
                    {
                        test: /\.html$/,
                        loader: 'html-loader',
                    },
                    {
                        exclude: /\.(js|css|less|html|jpg|png|gif)/,
                        loader: 'file-loader',
                        options: {
                            outputPath: 'media'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.[contenthash:10].css'
        }),
        //压缩CSS
        new OptimizeCssAssetsWebpackPlugin(),
        new WorkboxWebpackPlugin.GenerateSW({
            /*
            1.帮助serviceworker快速启动
            2.删除旧的serviceworker

            生成一个serviceworker配置文件

             */
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    mode: 'production',
    devtool: 'source-map'
}