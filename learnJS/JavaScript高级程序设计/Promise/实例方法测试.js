function onResolved(id) {
    setTimeout(console.log, 0, id, 'resolved')
}
function onRejected(id) {
    setTimeout(console.log, 0, id, 'rejected')
}

let p1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(reject, 1000)
})


p1.then(
    'aaaa'
) //非函数处理程序忽略

var p3 = p2.then(
    null, //规范写法
    ()=>{
        onRejected('p2')
    }
)
console.log(p3) //Promise { <state>: "fulfilled", <value>: undefined }
//抛出异常会返回拒绝的期约
var p4 = p3.then(()=>{
    throw 'error catch'
})

var p5 = p3.then(()=>{
     return Error('err reject')
})
console.log(p5)


//finally
var p6 = new Promise(()=>{})
var p7 = p6.finally()
console.log(p6 === p7) //false