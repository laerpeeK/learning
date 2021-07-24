/***
 Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
 @param: proto: 新创建对象的原型对象
         propertiesObject: 可选。需要传入一个对象，该对象的属性类型参照Object.defineProperties()的第二个参数。
        如果该参数被指定且不为 undefined，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符

 以下polyfill仅不支持第二个参数
 */


if(typeof Object.create !== 'function') {
    Object.create = function(proto, propertiesObject) {
        if(typeof proto !== 'object' && typeof proto !== 'function') {
            throw new Error('Object prototype may only be an Object: '+proto)
        } else if(proto === null) {
            throw new Error("This browser's implementation of Object.create is a shim and doesn't support null as the first arguments")
        }
        if(typeof propertiesObject !== 'undefined') {
            throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.")
        }

        function F(){}
        F.prototype = proto

        return new F()
    }
}