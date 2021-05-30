class Person {
    constructor(override) {
        this.foo = 'foo'
        if(override) {
            return {
                bar: 'bar'
            }
        }
    }
}

p1 = new Person()
p2 = new Person(true)

console.log(Person.__proto__ === Function.prototype) //true

console.log(p1 instanceof Person) // true
console.log(p2 instanceof Person) // false
console.log(p1 instanceof Person.constructor) //false


//super
class Vehicle {
    constructor(licensePlate) {
        this.licensePlate = licensePlate
    }
}

class Bus extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate);
        console.log(this.licensePlate)
    }
}
var bus = new Bus('A88888')
