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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //打包其他资源
            {
                exclude: /\.(css|js|html|jpg|png|gif|less)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: 'development',

    //开发服务器devServer 自动编译自动打开浏览器自动刷新浏览器
    //特点： 只会在内存中编译打包，不会有任何输出
    //启动指令：npx webpack-dev-server
    devServer: {
        //项目构建后的路径
        contentBase: resolve(__dirname, 'build'),
        //启动gzip压缩
        compress: true,
        port: 8089,
        //自动打开浏览器
        open: true,

    }

}