const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


/*

 */


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: resolve(__dirname,'build'),
    },
    module: {
      rules: [
          //loader的配置
          {
              test: /\.css$/,
              use: ['style-loader','css-loader']
          },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development',
    //解析模块的规则
    resolve: {
        //配置解析模块路径别名规则
        alias: {
            $css: resolve(__dirname, 'src/css')
        },
        //配置路径后缀名省略规则,注意文件名不要一样,避免冲突
        extensions: ['.js', '.json', 'jsx'],
        //告诉webpack解析模块应该去哪个目录找
        modules: [resolve(__dirname,'../../node_modules'), 'node_modules']
    }
}