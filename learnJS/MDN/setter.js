/***
当尝试设置属性时，set语法将对象属性绑定到要调用的函数。
 */

const language = {
    set current(name) {
        this.log.push(name)
    },
    log: [],
    a:0,
    get sayLog() {
        console.log(this.log)
    }
}
language.current = 'EN'
language.current = 'FA'

language.sayLog

Object.defineProperty(language,'b' ,{set: function(x){
        this.a = x/2
    }})
language.b = 10
console.log(language.a) //5

