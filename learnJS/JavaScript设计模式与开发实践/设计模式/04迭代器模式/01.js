/*
迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。

 */

/*
内部迭代器
迭代规则在内部定义完，外部只需要一次初始调用

 */
var each = function(ary, callback) {
    for(var i = 0, l = ary.length; i < l; i++) {
        callback.call(ary[i], i, ary[i])
    }
}

each([1,2,3], function(i, n){
    console.log([i, n])
})

/*
外部迭代器
必须显示地请求迭代下一个元素
 */
var Iterator = function(obj) {
    var current = 0
    var next = function(){
        current += 1
    }
    var isDone = function(){
        return current >= obj.length
    }
    var getCurrItem = function(){
        return obj[current]
    }
    return {
        next,
        isDone,
        getCurrItem
    }
}

var compare = function(iterator1, iterator2) {
    while(!iterator1.isDone() && !iterator2.isDone()) {
        if(iterator1.getCurrItem() !== iterator2.getCurrItem()) {
            throw new Error('iterator1 unequalTo iterator2')
        }
        iterator1.next()
        iterator2.next()
    }
    if(iterator1.isDone() && iterator2.isDone()) {
        return  'iterator1 equalTo iterator2'
    }
    throw new Error('iterator1 unequalTo iterator2')
}

var iterator1 = Iterator([1,2,3])
var iterator2 = Iterator([1,2,3])
console.log(compare(iterator1, iterator2))