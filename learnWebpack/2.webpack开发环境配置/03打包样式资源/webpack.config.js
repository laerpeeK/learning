/*
webpack 配置文件
作用：指示Webpack干哪些活，当运行Webpack时会加载对应配置
模块化：commonjs
所有的构建工具都是基于nodejs平台运行的
 */

const {resolve} = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    //loader配置
    //不同文件必须配置不同loader处理
    module:{
        rules: [
            //详细loader配置
            {
                test: /\.css$/,
                use:[
                    //使用哪些loader进行处理, 执行顺序：从右到左，从下到上
                    //创建style标签将js中的样式资源插入进去，添加到head中生效
                    'style-loader',
                    //将CSS文件以字符串形式变成commonjs模块加载到js中，内容为样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less',
                    'less-loader',
                ]
            }
        ]
    },
    plugins: [
        //详细plugins配置
    ],
    // mode: 'production'
    mode: 'development'
}