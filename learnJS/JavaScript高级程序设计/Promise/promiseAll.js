var p1 = Promise.all([])
console.log(p1) //Promise { <state>: "fulfilled", <value>: [] }

var p2 = Promise.all([])
/*
Promise {
<state>: "fulfilled"
<value>: Array(3) [ 1, 2, 3 ]
}
 */

var p3 = Promise.all([
    Promise.resolve(),
    new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
    })
])

setTimeout(console.log, 0, p3) //Promise { <pending> }

p3.then(()=>{
    setTimeout(console.log, 0, 'all resolved!') //1S后打印
})

var p4 = Promise.all([
    new Promise((resolve)=>{
        setTimeout(resolve,1000)
    }),
    // Promise.reject(),
    Promise.resolve()
]) //不等待
setTimeout(console.log, 0, p4) //Promise { <state>: "rejected", <reason>: undefined }

