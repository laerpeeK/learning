Function.prototype.before = function(beforefn) {
    var _self = this;
    return function() {
        beforefn.apply(this, arguments)
        return _self.apply(this, arguments)
    }
}

var func = function(param) {
    console.log(param) //{ a: 'a', b: 'b' }

}

func = func.before(function(param){
    param.b = 'b'
})

func({a: 'a'})

var ajax = function(type, url, param) {
    console.log(param)
}

var getToken = function() {
    return 'Token'
}

ajax = ajax.before(function(type, url, param) {
    param.Token = getToken()
})
ajax('get', 'http://xxx.com/userinfo', {name: 'sven'})
//{ name: 'sven', Token: 'Token' }