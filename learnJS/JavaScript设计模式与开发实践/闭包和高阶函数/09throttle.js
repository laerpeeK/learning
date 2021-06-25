var throttle = function(fn, interval) {
    var _self = fn, //保存需要被延迟执行的函数引用
        timer, //定时器
        firstTime = true //是否是第一次调用

    return function() {
        var args = arguments
        _me = this

        if(firstTime) { //如果第一次调用， 不需要延迟执行
            _self.apply(_me, args)
            return firstTime = false
        }

        if(timer) { //如果定时器还在， 说明前一次延迟还没完成
            return false
        }

        timer = setTimeout(function(){ //延迟一段时间后执行
            clearTimeout(timer)
            timer = null
            _self.apply(_me, args)
        }, interval || 500)
    }
}

//当浏览器窗口大小被拖动而改变的时候，这个事件触发的频率非常之高。
window.onresize = throttle(function(){
    console.log(1)
}, 500)