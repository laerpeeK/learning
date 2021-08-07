const p1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve('Promise resolve 1')
}).then(r => {
    console.log(2, r)
    return 3
}).then(r => {
    console.log(r)
})