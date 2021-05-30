
//1.其他原型语法
function Person() {}
Person.prototype = {
    name: 'Jack',
    age: 20,
    job: 'Engineer',
    sayName() {
        console.log(this.name)
    }
}

Object.defineProperty(Person.prototype, 'constructor',{
    enumerable: false,
    value: Person
})


//2.原型的动态性
var p2 = new Person()
p2.sayName() // Jack
Person.prototype = {
    name: 'AA'
}
p2.sayName() //Jack


//3.原生对象原型
//4.原型问题
