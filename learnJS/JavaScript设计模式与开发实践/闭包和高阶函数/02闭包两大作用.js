//封装变量
var mult = (function(){
    var cache = {}
    var calculate = function() {
        var a = 1
        for(var i = 0; i < arguments.length; i++) {
            a = a * arguments[i]
        }
        return a
    }

    return function() {
        var args = Array.prototype.join.call(arguments, ',')
        if( args in cache) {
            return cache[args]
        }
        return cache[args] = calculate.apply(null, arguments)
    }
})()

//延缓局部变量的寿命
var report = (function(){
    var imgs = []
    return function(src) {
        var img = new Image()
        imgs.push(img)
        //可以在这里添加一下操作，清除闭包存储的局部变量

        //
        img.src = src
    }
})()

