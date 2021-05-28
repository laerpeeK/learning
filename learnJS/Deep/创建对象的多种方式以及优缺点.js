/*
1.工厂模式
对象无法识别，所有实例指向同一个原型
 */
function createPerson(name) {
    var o = new Object()
    o.name = name
    o.getName = function() {
        console.log(this.name)
    }
    return o
}

/*
2.构造函数模式
实例可以识别为一个特定的类型
每次创建实例，每个方法都要被创建一次
 */
function Person_Constructor(name) {
    this.name = name
    this.getName = function() {
        conosole.log(this.name)
    }
}

/*
3.原型模式
方法不会被重新创建
所有的熟悉和方法都共享
不能初始化参数
 */
function Person_Prototype(name) {
}
Person.prototype.name = 'Kevin'
Person.prototype.getName = function() {
    console.log(this.name)
}

/*
4.组合模式
该共享的共享，该私有的私有
 */
function Person_Combine(name) {
    this.name = name
}
Person.prototype = {
    constructor: Person,
    getName: function(){
        console.log(this.name)
    }
}
