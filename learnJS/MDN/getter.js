/*
get语法将对象属性绑定到查询该属性时将被调用的函数。
1.可以使用数值或字符串做标识。
2.必须不带参数
3.它不能与另一个get或具有相同属性的数据条目出现在一个对象字面量中
 */
var expr = 'foo'
const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
        if(this.log.length === 0) {
            return undefined
        }
        return this.log[this.log.length - 1]
    },
    get zz() {
        return this.log
    },
    get[expr]() {
        return this.log
    }
}
console.log(obj.latest) // c
console.log(obj.zz) // [ 'a', 'b', 'c' ]
console.log(obj.foo) // [ 'a', 'b', 'c' ]

/*
Getters 给你一种方法来定义一个对象的属性，但是在访问它们之前不会计算属性的值
 */


/*
当使用 get 关键字时，属性将被定义在实例的原型上
 */

class Example {
    get hello() {
        return 'world'
    }
}

const objPr = new Example()
console.log(objPr.hello) //world

console.log(Object.getOwnPropertyDescriptor(objPr, 'hello')) //undefined

console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(objPr), 'hello'))
/*
get: [Function: get hello],
set: undefined,
    enumerable: false,
    configurable: true
}
 */

