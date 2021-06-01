// 执行顺序  同步
new Promise(()=>{
    setTimeout(console.log, 0, 'executor')
})
setTimeout(console.log, 0, 'promise initialized')

var p = new Promise((resolve, reject) => setTimeout(resolve, 1000))

setTimeout(console.log, 0, p) // Promise { <state>: "pending" }

setTimeout(console.log,1000,p) // Promise { <state>: "fulfilled", <value>: undefined }
