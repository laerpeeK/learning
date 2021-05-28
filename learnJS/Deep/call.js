/*
call()方法使用一个指定的this值和单独给出的一个或多个参数来调用一个函数
function.call(thisArg,arg1,arg2,...)
 */


//polyfill
//https://github.com/mqyqingfeng/Blog/blob/master/articles/%E6%B7%B1%E5%85%A5%E7%B3%BB%E5%88%97%E6%96%87%E7%AB%A0/JavaScript%E6%B7%B1%E5%85%A5%E4%B9%8Bcall%E5%92%8Capply%E7%9A%84%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0.md
Function.prototype.call2 = function(context,...arr) {

    if(typeof this !== 'function') {
        throw new TypeError('当前调用apply方法的不是函数！')
    }

    var context = context || window
    context.fn = this
    var result = context.fn(...arr)
    delete context.fn
    return result
}



var obj = {
    value: 1
}

function bar(name, age) {
    return {
        value: this.value,
        name: name,
        age: age
    }
}

console.log(bar.call2(obj, 'kevin', 18))