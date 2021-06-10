async function foo() {
    console.log(1)
    throw 3
}
foo().catch(console.log)
console.log(2)

async function fol() {
    console.log(1)
    Promise.reject(3)
}
foo().then(()=>{},(value)=>{console.log(value)}) //3
console.log(2)