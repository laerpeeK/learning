function Person() {

}
var person1 = new Person()

console.log(Person.constructor === Function) // true
console.log(Person.__proto__ === Function.prototype) //true
console.log(Person.prototype.constructor === Person) // true
console.log(Person.prototype.__proto__ === Object.prototype)  // true

console.log(Object.constructor === Function) //true
console.log(Object.__proto__ === Function.prototype) //true
console.log(Object.prototype.constructor === Object) // true
console.log(Object.prototype.__proto__ === null) //true

console.log(Function.constructor === Function) // true
console.log(Function.__proto__ === Function.prototype) //true
coonsole.log(Function.prototype.__proto__ === Object.prototype) //true

//It means Object原型是Function.prototype，Function原型是Function.prototype


console.log(person1.__proto__ === Person.prototype) // true
console.log(person1.constructor === Person) // true
console.log(person1.prototype === undefined) // true
