class Counter {
    constructor(limit) {
        this.limit = limit
    }

    [Symbol.iterator]() {
        let count = 1,
            limit = this.limit
        return {
            next() {
                if(count <= limit) {
                    return {done: false, value: count++}
                } else {
                    return {done: true, value: undefined}
                }
            },
            return() {
                console.log('Exiting early')
                return {done: true, value: count}
            }
        }
    }
}

let counter1 = new Counter(5)
for(let i of counter1) {
    console.log(i)
    if(i > 2) {
        break
    }
}
for(let i of counter1) {
    console.log(i)
}