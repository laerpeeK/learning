//polyfill
Function.prototype.apply =  function(thisArg) {
    if(typeof this !== 'function') {
        throw new TypeError('当前调用apply方法的不是函数！')
    }
    const args = arguments[1]
    thisArg = thisArg || window
    const fn = Symbol('fn')
    thisArg[fn] = this

    const result = thisArg[fn](...args)
    delete thisArg[fn]
    return result
}

