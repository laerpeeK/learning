//支持序列执行的Promise

var Promise = function() {
    //队列用于存储待执行的回调函数
    this.queue = []
    this.isPromise = true
}

Promise.prototype.then = function(fulfilledHandler, errorHandler, progressHandler) {
    var handler = {}
    if(typeof fulfilledHandler === 'function') {
        handler.fulfilled = fulfilledHandler
    }
    if(typeof errorHandler === 'function') {
        handler.error = errorHandler
    }
    this.queue.push(handler)
    return this
}

var Deferred = function() {
    this.promise = new Promise()
}

//完成态
Deferred.prototype.resolve = function(obj) {
    var promise = this.promise
    var handler = undefined

    while((handler = promise.queue.shift())) {
        if(handler && handler.fulfilled) {
            var ret  = handler.fulfilled(obj)
            if(ret && ret.isPromise) {
                ret.queue = promise.queue
                this.promise = ret
                return
            }
        }
    }

}

//失败态
Deferred.prototype.reject = function(err) {
    var promise = this.promise
    var handler
    while((handler = promise.queue.shift())) {
        if(handler && handler.error){
            var ret = handler.error(err)
            if(ret && ret.isPromise) {
                ret.queue = promise.queue
                this.promise = ret
                return
            }
        }
    }
}

//生成回调函数
Deferred.prototype.callback = function() {
    var that = this
    return function(err, file) {
        if(err) {
            return that.reject(err)
        }
        that.resolve(file)
    }
}