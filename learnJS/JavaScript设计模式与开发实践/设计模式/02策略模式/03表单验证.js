var strategies = {
    isNotEmpty: function(value, errorMsg) {
        if(value === '') {
            return errorMsg
        }
    },
    minLength: function(value, length, errorMsg) {
        if(value.length < length) {
            return errorMsg
        }
    },
    isMobile: function(value, errorMsg) {
        if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg
        }
    }
}

var Validator = function() {
    this.cache = [] //保存校验规则
}

Validator.prototype.add = function(dom, rule, errorMsg) {
    var ary = rule.split(':')   //把strategy和参数分开
    this.cache.push(function(){
        var strategy = ary.shift()
        ary.unshift(dom.value)
        ary.push(errorMsg)
        return strategies[strategy].apply(dom, ary)
    })
}
Validator.prototype.start = function() {
    for(var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var msg = validatorFunc()//开始校验，并取得校验后的返回信息
        if(msg){
            return msg
        }
    }
}




