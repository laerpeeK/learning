/*
它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。
实现发布订阅模式过程：
首先要指定好谁充当发布者（比如售楼处）；
然后给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者（售楼处的花名册）；
最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数（遍历花名册，挨个发短信）。
另外，我们还可以往回调函数里填入一些参数，订阅者可以接收这些参数。
 */
var event = {
    clientList: [],
    listen: function(key, fn) {
        if(!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn) //订阅地消息添加至缓存列表
    },
    trigger: function(){
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key]
        if(!fns || fns.length === 0){
            return false
        } //如果没有绑定对应地消息
        for(var i = 0,fn; fn = fns[i++];) {
            fn.apply(this, arguments) //arguments是trigger时携带的参数
        }
    },
    remove: function(key, fn) {
        var fns = this.clientList[key]

        if(!fns) { //如果key对应的消息没有被人订阅则直接返回
            return false
        }

        if(!fn) { //如果没有传入具体的回调函数，表示需要取消key对应消息的所有订阅
            fns && (fns.length = 0)
        } else {
            for( var l = fns.length - 1; l >= 0; l--) {
                var _fn = fns[l]
                if(_fn === fn) {
                    fns.splice(l,1)
                }
            }
        }
    }
}

var installEvent = function(obj) {
    for(var i in event) {
        obj[i] = event[i]
    }
}


var salesOffices = {}
installEvent(salesOffices)

salesOffices.listen('squareMeter88', function(price) {
    console.log('price= '+price)
})
salesOffices.listen('squareMeter100', function(price) {
    console.log('price= '+price)
})

salesOffices.trigger('squareMeter88', 200000)
salesOffices.trigger('squareMeter100', 300000)

