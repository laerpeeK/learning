function Person(name) {
    this.name = name
}
Person.prototype.getName = function() {
    return this.name
}

//
var objectFactory = function(){
    var obj = new Object() //从Object.prototype上克隆一个空对象
    Constructor = [].shift.call(arguments) //取得外部传入的构造器
    obj.__proto__ = Constructor.prototype //指向正确的原型
    var ret = Constructor.apply(obj, arguments) //借用外部传入的构造器给obj设置属性
    return typeof ret === 'object'? ret:obj //确保构造器总是会返回一个对象
}

var a = objectFactory(Person, 'sven')
console.log(a.name) //sven
console.log(a.getName()) //sven
console.log(a.__proto__ === Person.prototype) //true

var b = new Person('sven')
console.log(b.name, b.getName(), b.__proto__ === Person.prototype) //sven sven true
