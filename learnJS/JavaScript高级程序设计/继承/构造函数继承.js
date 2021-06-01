function SuperType(name) {
    this.colors = ['red', 'blue', 'green']
    this.name = name
}
function SubType(name) {
    SuperType.call(this,name)
}

var instance1 = new SubType()
var instance2 = new SubType()
//在SubType中运行了SuperType的所有初始化代码
//insantace1&2 均有自己一份colors
console.log(instance1.name) //jack

//问题
//1.必须在构造函数内定义方法，从而函数不能重用
//2.子类不能访问父类原型上定义的方法
