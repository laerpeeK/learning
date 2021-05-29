//可迭代对象
var arr = ['foo', 'bar']

//迭代器工厂函数
console.log(arr[Symbol.iterator])

//迭代器
var iter = arr[Symbol.iterator]()
console.log(iter)

//执行迭代
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

//自定义迭代器-range
var range = {
    from: 1,
    to: 3
}
range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if(this.current <= this.last) {
                return {done: false, value: this.current++}
            } else {
                return {done: true, value: undefined}
            }
        }
    }
}

var iterRange = range[Symbol.iterator]()
console.log(iterRange.next())
console.log(iterRange.next())
console.log(iterRange.next())
console.log(iterRange.next())
console.log(iterRange.next())
