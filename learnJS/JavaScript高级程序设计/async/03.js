async function foo() {
    let p = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 3)
    })
    console.log(await p)
    console.log(4)
}
foo()
console.log(2)
//2 3 4
