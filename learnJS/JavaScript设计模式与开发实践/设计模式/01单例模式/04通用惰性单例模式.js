/*
管理单例的逻辑
 */
var getSingle = function(fn) {
    var result
    return function(){
        return result || (result = fn.apply(this, arguments))
    }
}

/*
创建实例对象
 */
var createLoginLayer = function() {
    var div = document.createElement('div')
    div.innerHTML = '我是惰性单例创建的登录浮窗'
    div.style.display = 'block'
    document.body.appendChild(div)
    return div
}

var createSingleLoginLayer = getSingle(createLoginLayer)

