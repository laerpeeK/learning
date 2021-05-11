function EventEmitter() {
    //存储和统一管理所有类型的事件
    this._events = Object.create(null)
}

EventEmitter.defaultMaxListeners = 10

//同类型事件监听最大个数
EventEmitter.prototype.setMaxListeners = function(count) {
    this._count = count
}

//获取同类型事件监听最大个数
EventEmitter.prototype.getMaxListeners = function(){
    return this._count || EventEmitter.defaultMaxListeners
}

//type:事件类型  flag：是否从_events对应事件类型的数组前面添加函数成员
//on
EventEmitter.prototype.on = EventEmitter.prototype.addListener =  function(type, callback, flag = false) {
    //兼容继承不存在_events 的情况
    if(!this._events) this._events = Object.create(null)

    //如果type不是newListener就去执行newListener的回调
    if(type !== 'newListener') {
        //如果没添加newListener事件就忽略此处的逻辑
        if(this._events['newListener'] && this._events['newListener'].length) {
            this._events['newListener'].forEach(fn => fn(type))
        }
    }

    //如果不是第一次添加callback存入数组中
    if(this._events[type]) {
        if(flag) {
            this._events[type].unshift(callback)
        } else {
            this._events[type].push(callback)
        }
    } else {
        //第一次添加，在_events中创建数组并将callback添加到数组中
        this._events[type] = [callback];
    }

    let maxListeners  = this.getMaxListeners()

    if(this._events[type].length -1 === maxListeners) {
        console.error(`MaxListenersExceededWaring: ${maxListeners +1 } ${type} listeners added`)
    }
}

EventEmitter.prototype.prependListener = function(type, callback) {
    this.on(type, callback, true)
}

EventEmitter.prototype.once = function(type, callback, flag) {
    let wrap = (...args) => {
        callback(...args)
        this.removeListener(type, wrap)
    }
    //执行完callback后立即从数组中移除callback

    //存储callback，确保单独使用removeListener删除传入的callback时可以被删除掉
    wrap.realCallback = callback

    this.on(type, wrap, flag)
}

EventEmitter.prototype.prependOnceListener = function(type, callback) {
    this.once(type,callback,true)
}


EventEmitter.prototype.removeListener = function (type, callback) {
    if(this._events[type]) {
        this._events[type] = this._events[type].filter(fn => {
            return fn !== callback && fn !== callback.realCallback
        })
    }
}

EventEmitter.prototype.removeAllListeners = function(type) {
    if(type) {
        this._events[type] = [];
    } else {
        this._events = Object.create(null)
    }
}



EventEmitter.prototype.emit = function(type, ...args) {
    if(this._events[type]) {
        this._events[type].forEach(fn => fn.call(this, ...args))
    }
}

EventEmitter.prototype.eventNames = function() {
    return Object.keys(this._events)
}

EventEmitter.prototype.listeners = function(type) {
    return this._events[type]
}


module.exports = EventEmitter;

