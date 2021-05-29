//1.简写属性名
var name = 'Matt'
var person = {
    name
}
console.log(person.name)

//2.可计算属性-可以在对象字面量中完成动态属性赋值
const nameKey = 'name'
const ageKey = 'age'
const jobKey = 'job'
var person = {
    [nameKey]: 'Matt',
    [ageKey]: 27,
    [jobKey]: 'Software engineer'
}
console.log(person)

//3.简写方法名
var person = {
    sayName(name) {
        console.log(`my name is ${name}`)
    }
}
person.sayName('Jack')

//4.对象结构
var person = {
    name: 'Matt',
    age: 27
}
var {name: personName, age: personAge} = person
var {name, age ,job} = person
console.log(personName, personAge)
console.log(name, age, job) //undefined
