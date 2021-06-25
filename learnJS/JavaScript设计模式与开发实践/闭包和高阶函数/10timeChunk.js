//分时函数， 让页面创建的节点分批进行
//ary:创建节点要用到的数据  fn:创建节点逻辑的函数 count:每一批创建的节点数量
var timeChunk = function(ary, fn, count) {
    var obj,
        t

    var len = ary.length

    var start = function() {
        for(var i = 0; i < Math.min(count || 1, arr.length);i++) {
            var obj = ary.shift()
            fn(obj)
        }
    }

    return function() {
        t = setInterval(function() {
            if(ary.length === 0) {
                return clearInterval(t) //如果全部节点都已经被创建好
            }
            start()
        }, 200) //分批执行的时间间隔，也可以用参数的形式传入
    }
}

/*
例子：
var ary = []
for(var i = 1; i <= 1000; i++) {
    ary.push(i)
}

var renderFriendList = timeChunk(ary, function(n){
    var div = document.createElement('div')
    div.innerHTML = n
    document.body.appendChild(div)
},8)
renderFriendList()

 */