/*
代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。
保护代理：用于对象应该有不同的访问权限情况。代理B可以帮助实体A过滤掉一些不恰当的请求，即通过B来控制对A的访问。
虚拟代理：把一些开销很大的对象，延迟到真正需要它的实际才去创建。
单一职责原则：就一个类（通常也包括对象和函数等）而言，应该仅有一个引起它变化的原因。
开放-封闭原则:是说软件实体(类,模块,函数等等)应该是可扩展的,但是不可修改。
缓存代理：可以为一些开销大的运算结果提供暂时的存储，在下次运算时，
如果传递进来的参数跟之前一致，则可以直接返回前面存储的运算结果。
防火墙代理：控制网络资源的访问，保护主题不让白名单以外的人接近。
远程代理：为一个对象在不同的地址空间提供局部代表。
智能代理：取代了简单的指针，它在访问对象时执行一些附加操作，比如计算一个对象被引用的次数。
写时复制代理：通常用于复制一个庞大对象的情况。写时复制代理延迟了复制的过程，当对象被真正修改时，才对它进行复制操作。
我们在编写业务代码的时候，往往不需要去预先猜测是否需要使用代理模式。当真正发现不方便直接访问某个对象的时候，再编写代理也不迟。
 */
var Flower = function(){
    this.name  = 'rose'
}

var xiaoming = {
    sendFlower: function(target) {
        var flower = new Flower()
        target.receiveFlower(flower)
    }
}

var B = {
    receiveFlower: function(flower){
        A.listenGoodMood(function(){
            A.receiveFlower(flower)
        })
    }
}

var A = {
    receiveFlower: function(flower) {
        console.log('received '+ flower.name)
    },
    listenGoodMood: function(fn) {
        setTimeout(function(){
            fn()
        },1000)
    }
}

xiaoming.sendFlower(B)