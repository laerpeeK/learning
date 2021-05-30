function foo(age,year) {
    this.age = age
    this.year = year
    this.sayName = function(){
        console.log(this.name)
    }
}
var a = {
    name: 'Jack'
}
foo.apply(a,[20,15])
console.log(foo.bind(a).name) // bound foo
console.log(a) //{ name: 'Jack', age: 20, year: 15, sayName: [Function (anonymous)] }
a.sayName() //Jack

