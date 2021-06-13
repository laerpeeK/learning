import '../icon/iconfont.css'
require('!style-loader!css-loader!less-loader!../style/index.less')


function add(x, y) {
    return x+y
}
console.log(add(1,2))