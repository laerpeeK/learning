console.log(Object.constructor === Function) //true
console.log(Object.__proto__ === Function.prototype) //true
console.log(Object.prototype.constructor === Object) // true
console.log(Object.prototype.__proto__ === null) //true

console.log(Function.constructor === Function) // true
console.log(Function.__proto__ === Function.prototype) //true
coonsole.log(Function.prototype.__proto__ === Object.prototype) //true

/*
Object.__proto__ / Function.__proto__ === Function.prototype
Function.prototype.__proto__ -> Object.prototype.__proto__ -> null
 */
