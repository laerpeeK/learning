//1.工厂模式
/*
person__proto__ === Object.prototype
Object.prototype.__proto__ === null
 */
function createPerson(name, age, job) {
    var o  = new Object()
    o = {
        name,
        age,
        job,
        sayName(){
            console.log(this.name)
        }
    }
    return o
}

var person1 = createPerson('Jack', 23, 'Engineer')
var person2 = createPerson('Json',13,'Hacker')

console.log(person1.__proto__ === Object.prototype) //true
console.log(person1.prototype) //undefined
console.log(person1.constructor === Object) //true

console.log(createPerson.__proto__ === Function.prototype) //true
console.log(createPerson.prototype) // Object(constructor: createPerson())
console.log(createPerson.constructor === Function) //true