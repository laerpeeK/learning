const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


/*
entry: 入口起点
type: string: './src/index.js' 打包形成一个chunk, 输出一个bundle文件
                               chunk默认名：main
      array: 多入口，所有入口文件最终只会形成一个chunk, 输出只有一个bundle
             -->只有在HMR功能中让html热更新生效
      object: 多入口，有几个入口文件对应几个chunk,输出几个bundle
              此时chunk的名称是key
              --> 特殊用法：
              entry: {
                 index: ['./src/index.js', './src/count.js'],
                 add: './src/index.js'
                 react: ['react.js', 'react-dom.js','react-router.js']
              },
 */


module.exports = {
    // entry: './src/index.js',
    // entry: ['./src/index.js', './src/add.js'],
    entry: {
      index: ['./src/index.js', './src/count.js'],
      add: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname,'build')
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}