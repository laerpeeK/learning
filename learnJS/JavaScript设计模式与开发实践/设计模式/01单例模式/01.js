//保证一个类仅有一个实例，并提供一个访问它的全局访问点。
var Singleton = function(name) {
    this.name = name
    this.instance = null //实例，例子
}
Singleton.prototype.getName = function() {
    console.log(this.name)
}

Singleton.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}

var a = Singleton.getInstance('sven1')
var b = Singleton.getInstance('sven2')
console.log(a === b) //true
console.log(Singleton.getInstance()) //Singleton { name: 'sven1', instance: null }
//这里偏要使用Singleton.getInstance来获取对象


