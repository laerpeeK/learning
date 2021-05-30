function SuperType(){
    this.colors = ['red', 'blue', 'green']
}
function SubType() {

}
SubType.prototype = new SuperType()

var instance1 = new SubType()
var instance2 = new SubType()
instance1.colors.push('black')
console.log(instance2.colors) //[ 'red', 'blue', 'green', 'black' ]
/*
即：prototype上的属性被所有子实例共享
子类型在实例化时不能给父类型的构造函数传参。
 */

