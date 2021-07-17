var order500 = function(orderType, pay, stock) {
    if(orderType === 1 && pay === true) {
        console.log('500元定金预购，得到100优惠券')
    } else {
        return 'nextSuccessor' //请求后传
    }
}

var order200 = function(orderType, pay, stock) {
    if(orderType === 2 && pay === true) {
        console.log('200元定金预购， 得到50优惠券')
    } else {
        return 'nextSuccessor'
    }
}

var orderNormal = function(orderType, pay, stock) {
    if(stock > 0) {
        console.log('普通购买， 无优惠券')
    } else {
        console.log('手机库存不足')
    }
}

//Chain.prototype.setNextSuccessor 指定在链中的下一个节点
//Chain.prototype.passRequest 传递请求给某个节点

var Chain = function(fn) {
    this.fn = fn
    this.successor = null
}

Chain.prototype.setNextSuccessor = function(successor) {
    this.successor = successor
}

Chain.prototype.passRequest = function() {
    var ret = this.fn.apply(this, arguments)
    if(ret === 'nextSuccessor') {
        this.next()
        //return this.successor && this.successor.passRequest(this.successor, arguments)
    }
    return ret
}

Chain.prototype.next = function() {
    return this.successor && this.successor.passRequest(this.successor,arguments)
}

var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)


chainOrder500.passRequest(1,false,500)