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
          {
              test: /\.js$/,
              //排除node_modules下的js文件
              exclude: /node_modules/,
              //只检查src下的js文件
              include: resolve(__dirname, 'src'),
              enforce: 'pre',
              // enforce: 'post',  延后执行
              loader: 'eslint-loader',
              options: {}
          },
          {
              //以下配置只会生效一个
              oneOf: [

              ]
          }

      ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}