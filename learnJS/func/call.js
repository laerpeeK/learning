/*
call()方法使用一个指定的this值和单独给出的一个或多个参数来调用一个函数
function.call(thisArg,arg1,arg2,...)
 */


//polyfill
//https://www.codenong.com/j5dd28024e51d451ac31/
Function.prototype.call = function(thisArg) {
    if(typeof this !== 'function') {
        throw new TypeError('当前调用call方法的不是函数!')
    }

    const args = [...arguments].slice(1)

    thisArg = thisArg || window

    const fn = Symbol('fn')
    thisArg[fn](this)

    const result = thisArg[fn](...args)
    delete thisArg[fn]
    return result
}

//01.构造函数继承
function Product(name, price) {
    this.name = name
    this.price = price
}

function Food(name, price) {
    Product.call(this, name, price)
    this.category = 'toy'
}

//02.call方法调用函数并且指定上下文的this
function greet() {
    var reply = [this.animal, ' typically sleep between', this.sleepDuration].join('')
    console.log(reply)
}

var obj = {
    animal:'cats',
    sleepDuration: '12 and 16 hours',
}
greet.call(obj)



