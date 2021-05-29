
/*原型链继承
problems: 1.引用类型的属性被所有实例共享
          2.在创建Child的实例时，不能向Parent传参

*/
function Parent () {
    this.names =    'aa'
}

Parent.prototype.getName = function() {
    console.log(this.names)
}

function Child() {
}


Child.prototype = new Parent()
var child1 = new Child()
child1 = child1.names+'s'
console.log(child1.prototype)


/*借用构造函数继承

*/
function Parent_2() {
    this.names = ['kevin', 'daisy']
}


function Child_2(){
    Parent_2.call(this)
}

var child2 = new Child_2()
console.log(child2.names)

