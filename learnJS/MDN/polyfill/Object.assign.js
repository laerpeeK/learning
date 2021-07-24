/***
 Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
 Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
 该方法使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter
 假如源值是一个对象的引用，它仅仅会复制其引用值

 这个 polyfill 不支持 symbol 属性, 由于 ES5 中本来就不存在 symbols
 */

if(typeof Object.assign != 'function') {
    //Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
        value: function assign(target, varArgs) {// .length of function is 2
            'use strict';
            if(target == null) { // TypeError if undefined or null
                throw new Error('Cannot convert undefined or null to object')
            }
            let to = Object(target)

            for(var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index]

                if(nextSource != null) {
                    for(let nextKey in nextSource) {
                        if(Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey]
                        }
                    }
                }
            }
            return to
        },
        writable: true,
        configurable: true
    })
}