var isType = function(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === '[object '+type+']'
    }
}
var Type = {}
for(var i = 0, type; type = ['String','Array','Number'][i++];){
    (function(type) {
            Type['is' + type] = function (obj) {
                return Object.prototype.toString.call(obj) === '[object '+type+']'
            }
        })(type)
}
console.log(Type.isArray([])) //true
