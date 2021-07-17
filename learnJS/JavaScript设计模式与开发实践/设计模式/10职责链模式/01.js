/*
使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，
将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。
请求发送者只需要知道链中的第一个节点，从而弱化了发送者和一组接收者之间的强联系。
 */

var order500 = function(orderType, pay, stock) {
    if(orderType === 1 && pay === true) {
        console.log('500元定金预购，得到100优惠券')
    } else {
        order200(orderType,pay, stock) //将请求传递给200元订单
    }
}

var order200 = function(orderType, pay, stock) {
    if(prderType === 2 && pay === true) {
        console.log('200元定金订购，得到50元优惠券')
    } else {
        orderNormal(orderType, pay, stock) //将请求传递给普通订单
    }
}

var orderNormal = function(orderType, pay, stock) {
    if(stock > 0) {
        console.log('普通购买，无优惠券')
    } else {
        console.log('手机库存不足')
    }
}