// const getFullName = ({firstName, lastName}) =>{
//     return `${firstName} ${lastName}`
// }

import get = Reflect.get;

interface NameInfo {
    firstName: string,
    lastName: string
}
const getFullName = ({firstName, lastName}: NameInfo): string => {
    return `${firstName} ${lastName}`
}
getFullName({
    firstName:'haha',
    lastName :'jack'
})

interface Vegetable {
    color?: string,
    readonly type: string,
    [prop: string] : any
}

const getVegetables = ({color, type}: Vegetable) => {
    return `A ${color ? (color+' '):''}${type}`
}

// getVegetables({
//     type: 'apple',
//     color: 'red',
//     size: 2
// } as Vegetable)

getVegetables({
     type: 'apple',
     color: 'red',
     size: 2
 })

const vegetableInfo = {
    type: 'apple',
    color: 'red',
    size: 2
}
getVegetables(vegetableInfo)


interface ArrInter {
    0: number,
    readonly 1: string
}
// let arr: ArrInter = [1,'a'] //wrong

type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1+n2

interface RoleDic {
    [id: string]: string
}

const role1: RoleDic = {
    0: 'super',
    a: 'super+Admin'
}

const obj8 = {
    123: 'a',
    '1234': 'b'
}

interface Vegetables {
    color: string
}

interface Tomato  extends Vegetables{
    radius: number
}

interface Carrot {
    color: string,
    length: number
}

const tomato: Tomato = {
    radius: 1,
    color: 'red'
}

const carrot: Carrot = {
    length: 2,
    color: 'orange'
}

interface Counter {
    (): void,
    count: number
}
const getCounter = (): Counter => {
    const c = () => {c.count++}
    c.count = 0
    return c
}

const counter: Counter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)