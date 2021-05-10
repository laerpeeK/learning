// var emitter = new events.EventEmitter()
// emitter.on('event_foo',function() {
//实际操作
// })

//高阶函数
var a = function(){
    return function(){
        console.log('a')
    }
}
a()()


//偏函数
var toString = Object.prototype.toString
var isString = function(obj) {
    return toString.call(obj) === '[object String]'
}

//combine
var isType = function(type) {
    return function(obj){
        return toString.call(obj) === `[object ${type}]`
    }
}


