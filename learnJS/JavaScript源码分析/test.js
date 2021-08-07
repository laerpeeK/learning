const MyPromise = require('./MyPromise')
const promise_sync = new MyPromise((resolve, reject) => {
    resolve('success')
    reject('err')
})

promise_sync.then(value=> {
    console.log('resolve',value)
}, value => {
    console.log('reject', reason)
})

const promise_async = new MyPromise((resolve,reject) => {
    setTimeout(() => {
        resolve('async promise success')
    }, 1000)
})

promise_async.then(value => {
        console.log('resolve', value)
    }, reason => {
        console.log('reject', reason)
    })

const promise_then = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('then consistant success')
    }, 2000)
})

promise_then.then(value => {
    console.log(1)
    console.log('resolve', value)
})



promise_then.then(value => {
    console.log(2)
    console.log('resolve', value)
})

promise_then.then(value => {
    console.log(3)
    console.log('resolve', value)
})


function other() {
    return MyPromise((resolve, reject) => {
        resolve('other')
    })
}


promise.then(value => {
    console.log(1)
    console.log('resolve', value)
    return other()
}).then(value => {
    console.log(2)
    console.log('resolve', value)
})
