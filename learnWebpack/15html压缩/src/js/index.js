// import '@babel/polyfill'
const add = (x,y) => {
    return x+y
}
console.log(add(1,2))

const promise = new Promise((resolve)=>{
    setTimeout(() => {
        console.log('settimeout 1s')
        resolve()
    },1000)
})

console.log(promise)