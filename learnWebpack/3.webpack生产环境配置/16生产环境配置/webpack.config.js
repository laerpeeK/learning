const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin  = require('optimize-css-assets-webpack-plugin')


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
        filename: "js/built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
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
                //在package.json中eslintConfig -- JavaScriptStandard(airbnb)
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
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
                    ]
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
            filename: 'css/built.css'
        }),
        //压缩CSS
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: 'production'
}