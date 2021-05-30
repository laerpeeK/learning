var person = {
    name: 'Jack',
    friends: ['Shelby', 'Court', 'Van'], //引用属性
    love: {a:'a'}
}

var anotherPerson = Object.create(person)
anotherPerson.name = 'GrEG'
anotherPerson.friends.push('Rob')
anotherPerson.love['a'] = 'b'
console.log(person.friends, person.name, person.love)
console.log(anotherPerson.friends, anotherPerson.name, anotherPerson.love)
//两者除了名字外都相同
//非常适合不需要单独创建构造函数，但仍然需要在对象间共享信息的场合
