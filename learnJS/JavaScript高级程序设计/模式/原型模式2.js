let biped = {
    numLegs: 2
}

let person = Object.create(biped)
person.name = 'Matt'
console.log(person.numLegs) //2
console.log(person.__proto__ === biped) //true

function Person() {}
Person.prototype.name = 'Nico'
Person.prototype.sayName = function() {
    console.log(this.name)
}
let person1 = new Person()
person1.name = 'Greg'
console.log(person1.name) //Greg
person1.name = null
console.log(person1.name) //null
delete person1.name
console.log(person1.name) //Nico



