const s1 = Symbol('jack')
const s2 = Symbol('jack')

const s3 = Symbol('name')
const info = {
    [s3]: 'jack',
    age: 22,
    sex: 'man'
}
console.log(info)
info[s3] = 'laer'
console.log(info)
console.log(info[s3])
for(const key in info) {
    console.log(key)
}
console.log(Object.keys(info))
console.log(Object.getOwnPropertyNames(info))
console.log(JSON.stringify(info))
console.log(Object.getOwnPropertySymbols(info))
console.log(Reflect.ownKeys(info)) //可访问symbol属性

//Symbol.for() Symbol.keyFor()
const s4 = Symbol.for('jack')
const s5 = Symbol.for('jack')

console.log(Symbol.keyFor(s4)) //jack
console.log(Symbol.keyFor(s3)) //undefined

//11个内置symbol值

//instanceof
const obj1 = {
    [Symbol.hasInstance](otherObj: any) {
        console.log(otherObj)
    }
}
console.log({a: 'a'} instanceof <any>obj1)

//isConcatSpreadable
let arr = [1,2]
console.log([].concat(arr,[3,4]))
arr[Symbol.isConcatSpreadable] = false
console.log([].concat(arr,[3,4])) // [1,2],3,4  //去扁平化

//
class C extends Array {
    constructor(...args) {
        super(...args);
    }
    static get[Symbol.species]() {
        return Array
    } //创建衍生对象的构造函数
    getName() {
        return 'jack'
    }
}
const c = new C(1,2,3)
const a = c.map(item => item+1)
console.log(a)
console.log(a instanceof C) //false
console.log(a instanceof Array)


let obj3 = {
    [Symbol.match] (string) {
        console.log(string.length)
    },
    [Symbol.split] (string) {
        console.log('split', string.length)
    }
}
'abcde'.match(<RegExp>obj3)

//Symbol.replace
//Symbol.search
//Symbol.split
'abcde'.split(<any>obj3)

const iterator = arr[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

let obj4: unknown = {
    [Symbol.toPrimitive] (type) {
        console.log(type)
    }
}

// const res = (obj4 as number)++
const res = `abc${obj4}` //default

//Symbol.toStringTag
let obj5 = {
    get [Symbol.toStringTag]() {
        return 'jack'
    }
}
console.log(obj5.toString())


const obj6 = {
    a: 'a',
    b: 'b'
}

console.log(Array.prototype[Symbol.unscopables])