function addTwo(x) {
    return x+2
}
function addThree(x) {
    return x+3
}
function addFive(x) {
    return x+5
}

function addTen(x) {
    return [addTwo,addThree,addFive]
        .reduce(
            (promise, fn) =>
            promise.then(fn),//preValue currentValue
            Promise.resolve(x)); //initialValue
}

addTen(5).then(console.log) //15

function compose(...fns) {
    return (x) =>
        fns.reduce((promise, fn) =>
            promise.then(fn), Promise.resolve(x))
}
let addTenCompose = compose(addTwo, addThree, addFive)
addTenCompose(5).then(console.log) //15