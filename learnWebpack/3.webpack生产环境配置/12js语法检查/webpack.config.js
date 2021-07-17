const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname,'build')
    },
    module: {
        rules:[
            /*
            语法检查:规范团队代码风格
            注意：只检查自己写的源代码，不检查第三方库
            设置检查规则： eslint-loader eslint
                package.json[eslintConfig]中设置
                JavaScript书写规范(airbnb)
            顺序：1.排除node_modules,引入eslint-loader
                 2.在packjson   "eslintConfig": {
                                    "extends": "JavaScript书写规范(airbnb)-base"
                                }
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    //自动修复eslint的错误
                    fix: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        port: 8089,
        open: true,
        compress: 'gzip'
    }
}