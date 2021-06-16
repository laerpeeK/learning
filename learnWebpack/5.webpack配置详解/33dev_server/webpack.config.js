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
    },
    devServer: {
        //运行代码的目录
        contentBase: resolve(__dirname, 'build'),
        //监视contentBase目录下的所有文件， 一旦文件变化就会reload
        watchContentBase: true,
        watchOptions:{
          ignored: /node_modules/
        },
        //启动gzip压缩
        compress: true,
        //端口号
        port: 8089,
        //域名
        host: 'localhost',
        //自动打开浏览器
        open: true,
        //开启HMR功能
        hot: true,
        //启动服务器的日志信息,
        clientLogLevel: 'none',
        //除了一些基本启动信息以外，其他内容都不要显示
        quiet: true,
        //如果出错了，不要全屏提示
        overlay: false,
        //服务器代理,解决开发环境跨域问题
        proxy: {
            //一旦devServer服务器（8089）接收到/api/xxx的请求，就会转发到3000端口
            '/api': {
                target: 'http://localhost:3000',
                //发生请求时，请求路径重写，将 /api/xxx --> /xxx（去掉/api）
                pathRewrite: {
                    '^api': ''
                }
            }
        }
    }
}