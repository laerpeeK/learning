/*
Promise.resolve().then(() => {
    console.log(0)
    return Promise.resolve(4)
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1)
}).then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(6)
})
*/

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        //立即执行
        executor(this.resolve, this.reject)
    }
    //储存状态的变量，初始值为pending
    status = PENDING

    //成功后的值
    value = null

    //失败的原因
    reason = null

    //存储成功回调函数
    onFulfilledCallback = []

    //存储失败回调函数
    onRejectedCallback = []

    //更改成功后的状态
    resolve = (value) => {
        if(this.status === PENDING) {
            this.status = FULFILLED
            this.value = value

            while(this.onFulfilledCallback.length) {
                this.onFulfilledCallback.shift()(value)
            }

        }
    }

    //更改失败后的状态
    reject = (reason) => {
        if(this.status === PENDING) {
            this.status === REJECTED
            this.reason = reason
            this.onRejectedCallback&& this.onRejectedCallback(reason)
            while(this.onRejectedCallback.length) {
                this.onRejectedCallback.shift()(reason)
            }
        }
    }

    then(onFulfilled, onRejected) {

        const promise2 = new MyPromise((resolve, reject) => {
            if(this.status === FULFILLED) {
                const x = onFulfilled(this.value)
                resolvePromise(x, resolve, reject)
            } else if(this.status === REJECTED) {
                onRejected(this.reason)
            } else if(this.status === PENDING) {
                this.onFulfilledCallback.push(onFulfilled)
                this.onRejectedCallback.push(onRejected)
            }
        })
        return promise2
    }
}
function resolvePromise(x, resolve, reject) {
    if(x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}



module.exports = MyPromise














