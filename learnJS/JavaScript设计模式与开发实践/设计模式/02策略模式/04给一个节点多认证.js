var strategies = {
    isNonEmpty: function(value, errorMsg) {
        if(value === '') {
            return errorMsg;
        }
    },
    minLength: function(value, length, errorMsg) {
        if(value.length < length) {
            return errorMsg
        }
    },
    isMobile: function(value, errorMsg) {
        if(!/(^1[3|5|8][0-9]{9}$)/.test(value)){
            return errorMsg
        }
    }
}

var Validator = function() {
    this.cache = []
}

Validator.prototype.add = function(dom, rules) {
    var self = this
    for(var i = 0, rule; rule = rules[i++];) {
        (function(rule){
            var strategyAry = rule.strategy.split(':')
            var errorMsg = rule.errorMsg

            self.cache.push(function(){
                var strategy = strategyAry.shift()
                strategyAry.unshift(dom.value)
                startegyAry.push(errorMsg)
                return strategies[strategy].apply(dom, strategyAry)
            })(rule)
        })
    }
}

Validator.prototype.start = function(){
    for(var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var errorMsg = validatorFunc()
        if(errorMsg) {
            return errorMsg
        }
    }
}

//client example
var registerForm = document.getElementById('registerForm')
var validataFunc = function() {
    var validator = new Validator()

    validator.add(registerForm.userName, [
        {
            strategy: 'isNotEmpty',
            errorMsg: '用户名不能为空'
        },
        {
            strategy: 'minLength:6',
            errorMsg: '用户名长度不能小于6位'
        }
    ])
    validator.add(registerForm.password,[
        {
            strategy: 'minLength:6',
            errorMsg: '密码长度不能小于6位'
        }
    ])
    var errorMsg = validator.start()
    return errorMsg
}

registerForm.onsubmit = function(){
    var errorMsg = validataFunc()
    if(errorMsg) {
        alert(errorMsg)
        return false
    }
}