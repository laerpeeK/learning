import '../icon/iconfont.css'
import print from './print'
require('!style-loader!css-loader!less-loader!../style/index.less')
console.log('index.js文件被加载了~')
function add(x, y) {
    return x+y
}
console.log(add(1,2))


//有该变量-》开启了HMR功能
if(module.hot) {
    module.hot.accept('./print.js', function() {
        //方法会监听该文件的变化，一旦变化，其他模块不会重新打包构建，会执行后面的回调函数
        print()
    })
}