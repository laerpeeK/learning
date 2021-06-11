//boolean
let bool: boolean = false
bool = true

//number
let num: number = 123

//string
let str: string
str = 'abc'
str = `num is ${num}`
console.log(str)

//Array01
let arr1: number[]
arr1 = [1,2,3]

//Array02
let arr2: Array<number>
let arr3: (string|number)[]
arr3 = [1,'2']
console.log(arr3)

//tuple
let tuple: [string, number, boolean]
tuple = ['a',1,true]

//enumeration
enum Roles{
    SUPER_ADMIN = 1,
    ADMIN,
    USER
}
console.log(Roles[1])
console.log(Roles['SUPER_ADMIN'])

//any
let value: any
value = 1
value = 'a'
value = arr1

//void
const consoleText = (text: string): void => {
    console.log(text)
}
consoleText('abc')

//null undefined
let v: void
v = undefined
let n: null
n = null

//never
const errorFunc = (message: string): never => {
    throw new Error(message)
}

const infiniteFunc = (): never => {
    while(true) {
    }
}
// let neverVariable = ( ()=> {
//     while(true) {}
// })
// n = neverVariable //wrong

//object
let obj = {
    name: 'laerpeek'
}
let obj2 = obj
obj2.name = 'L'
console.log(obj)
function getObject(obj: object): void {
    console.log(obj)
}
getObject(obj)

//类型断言
const getLength = (target: string | number): number => {
    if((<string>target).length || (target as string).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}
getLength(111)