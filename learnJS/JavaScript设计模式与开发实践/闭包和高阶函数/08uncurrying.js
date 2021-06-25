//把泛化this的过程提取出来
Function.prototype.uncurrying = function() {
    var self = this
    return function() {
        var obj = Array.prototype.shift.call(arguments)
        return self.apply(obj, arguments)
    }
}
var push = Array.prototype.push.uncurrying()
var a = {}
push(a, 1,2)
console.log(a) //{ '0': 1, '1': 2, length: 2 }

//
Function.prototype.uncurrying2 = function() {
    var self = this
    return function() {
        return Function.prototpe.call.apply(self, arguments)
    }
}