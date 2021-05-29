/*
person1.__proto__ === Person.prototype
Person.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null
Person instanceof Function

 */

function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function() {
        console.log()
    }
}

var person1 = new Person('jack', 23, 'engineer')
var person2 = new Person('Greg', 13, 'Hacker')

console.log(Person.__proto__ === Function.prototype) //true
console.log(Person.constructor === Function) //true
console.log(Person.prototype) //Object{constructor: function Person()}

console.log(person1.__proto__ === Person.prototype) //true
console.log(person1.constructor === Person) // true
console.log(person1.prototype) //undefined

