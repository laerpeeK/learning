function SuperType() {
    this.property = true
}

SuperType.prototype.getSuperValue = function() {
    return this.property
}

function SubType() {
    this.subProperty = false
}
SubType.prototype = new SuperType()
var instance = new SubType()

console.log(SuperType.prototype.__proto__ === Object.prototype) // true

console.log(SubType.prototype.__proto__ === SuperType.prototype) // true
console.log(SubType.__proto__ === Function.prototype) //true

console.log(instance.__proto__ === SubType.prototype) //true
console.log(instance.__proto__.__proto__ === SuperType.prototype) //true
console.log(instance.constructor === SubType.prototype.constructor === SuperType) //true



