//这种在运行时，动态地将代码切入到类的指定方法、指定位置上的编程思想就是面向切面的编程
Function.prototype.before = function(beforeFn) {
    return () => {
        // 执行新函数，且保证this不被劫持，新函数接受的参数
        // 也会被原封不动地传入原函数，新函数在原函数之前执行
        beforeFn.apply(this, arguments)
        // 执行原函数并返回原函数的执行结果,
        // 并且保证this不被劫持
        return this.apply(this, arguments)
    }
}

Function.prototype.after = function(afterFn) {
    return () => {
        var ret = this.apply(this, arguments)
        afterFn.apply(this, arguments)
        return ret
    }
}

var before = function(fn, beforefn) {
    return function() {
        beforefn.apply(this, arguments)
        return fn.apply(this, arguments)
    }
}

var a = before(
    function(){alert(3)},
    function(){alert(2)}
)
a = before(a, function(){alert(1)})