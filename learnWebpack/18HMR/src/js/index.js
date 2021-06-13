import '../icon/iconfont.css'
import print from './print'
require('!style-loader!css-loader!less-loader!../style/index.less')
console.log('index.js文件被加载了~')
function add(x, y) {
    return x+y
}
console.log(add(1,2))
print()