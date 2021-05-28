function simpleClone(obj) {
    var cloneObj = {}
    //1.ES6
    for(var i in obj){
        cloneObj[i] = obj[i]
    }


    //2.ES5
    Object.getOwnPropertyNames(obj).forEach(function(key){
        var des = Object.getOwnPropertyDescriptor(obj, key)
        Object.defineProperty(cloneObj, key, des)
    })

    return cloneObj
}

function deepClone(obj, cloneObj) {
    var cloneObj = cloneObj || {},
        toStr = Object.prototype.toString,
        objArr = '[object Array]'

    for(var i in obj){
        if(typeof obj[i] === 'object' && obj[i] !== null) {
            cloneObj[i] = toStr.call(obj[i]) === objArr? []:{}
            deepClone(obj[i],cloneObj[i])
        } else {
            cloneObj[i] = obj[i]
        }
    }
    return cloneObj
}

//JSON
function deepClone_json(obj) {
    return JSON.parse(JSON.stringify(obj))
}
