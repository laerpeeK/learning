const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

/*

 */


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash:10].js',
        path: resolve(__dirname,'build'),
        chunkFilename: "[name].[contenthash:10]_chunk.js"
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
    mode: 'production',
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
    optimization: {
        splitChunks: {
            chunks: "all",
            //默认值，可以不写
            minSize: 30 * 1024, //分割的chunk最小为30kb
            maxSize: 0, //无限制
            minChunks: 1, //要提取的chunks最少被引用1次
            maxAsyncRequests: 5, //按需加载时，并行加载的文件的最大数量
            maxInitialRequests: 3, //入口js文件最大并行请求数量
            automaticNameDelimiter: "~", //名称连接符
            name: true, //可以使用命名规则
            cacheGroups: { //分割chunk的组
                //node_modules文件会被打包到vendors组的chunk中 --> vendors~xxx.js
                //满足上面的公共规则，如：大小超过30kb,至少被引用1次
                vendors: {
                    test: /[\\/node_modules[\\/]/,
                    //优先级
                    priority: -10,
                },
                default: {
                    //要提取的chunk最少被引用2次
                    minChunks: 2,
                    //优先级
                    priority: -20,
                    //如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
                    reuseExistingChunk: true
                }
            }
        },
        //将当前模块的记录其他模块的hash单独打包一个文件
        //解决修改add文件导致main文件hash值变换，缓存失效问题
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        },
        minimizer: [
            //配置生产环境的压缩方案 js css
            new TerserWebpackPlugin({
                //开启缓存
                cache: true,
                //开启多进程打包
                parallel: true,
                //启动source-map
                sourceMap: true,
            })
        ]
    }
}