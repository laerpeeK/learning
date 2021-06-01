function delayResolve(str) {
    return new Promise((resolve, reject) => {
        console.log(str)
        setTimeout(resolve, 1000)
    })
}

//test
delayResolve('p1 executor')
    .then(
        () => delayResolve('p2 executor'))
    .then(
        () => delayResolve('p3 executor'))
    .then(
        () => delayResolve('p4 executor'))