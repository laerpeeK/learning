/*
装饰者模式可以动态地给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。

这种给对象动态增加职责的方式，并没有真正地改动对象自身，而是将对象放入另一个对象之中，
这些对象以一条链的方式进行引用，形成一个聚合对象。

这些对象都拥有相同的接口（fire方法），当请求达到链中的某个对象时，这个对象会执行自身的操作，
随后把请求转发给链中的下一个对象。

代理模式强调一种关系（Proxy 与它的实体之间的关系），这种关系
可以静态的表达，也就是说，这种关系在一开始就可以被确定。而装饰者模式用于一开始不能确
定对象的全部功能时。代理模式通常只有一层代理本体的引用，而装饰者模式经常会形成一条
长长的装饰链。


 */
var Plane = function() {}
Plane.prototype.fire = function() {
    console.log('发射普通子弹')
}

var MissileDecorator = function(plane) {
    this.plane = plane
}
MissileDecorator.prototype.fire = function() {
    this.plane.fire()
    console.log('发射导弹')// 分别输出：发射普通子弹、发射导弹、发射原子弹
}

var AtomDecorator = function(plane) {
    this.plane = plane
}
AtomDecorator.prototype.fire = function() {
    this.plane.fire()
    console.log('发射原子弹')
}

var plane = new Plane()
plane = new MissileDecorator(plane)
plane = new AtomDecorator(plane)
plane.fire()