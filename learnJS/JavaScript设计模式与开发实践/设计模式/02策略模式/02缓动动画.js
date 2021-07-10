/*
该代码未经验证 暂不可用

t: 动画已消耗的时间
b: 小球原始位置
c: 小球目标位置
d: 动画持续的总时间
 */
var tween = {
    linear: function( t, b, c, d ){
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d) {
        return c * (t/= d) * t +b;
    },
    strongEaseIn: function(t, b, c, d){
        return c * ( t /= d ) * t * t * t * t + b;
    },
    strongEaseOut: function(t, b, c, d){
        return c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b;
    },
    sineaseIn: function( t, b, c, d ){
        return c * ( t /= d) * t * t + b;
    },
    sineaseOut: function(t,b,c,d){
        return c * ( ( t = t / d - 1) * t * t + 1 ) + b;
    }
}

var Animate = function(dom) {
    this.dom = dom  //进行运动的dom节点
    this.startTime = 0  //动画开始时间
    this.startPos = 0   //动画开始时，dom节点的位置
    this.endPos = 0     //动画结束时，dom节点的位置
    this.propertyName = null    //dom节点需要被改变的css属性名
    this.easing = null      //缓动算法
    this.duration = null    //动画持续时间
}

//启动动画
Animate.prototype.start = function(propertyName, endPos, duration, easing) {
    this.startTime += new Date //动画启动时间
    this.startPos = this.dom.getBoundingClientRect()[propertyName] //dom节点初始位置
    this.propertyName = propertyName    //dom节点需要被改变的css属性名
    this.endPos = endPos    //dom节点目标位置
    this.duration = duration    //动画持续时间
    this.easing = tween[easing]  //缓动算法

    var self = this
    var timeId = setInterval(function(){    //开始执行动画
        if(self.step() === false) {     //如果动画已结束，则清除定时器
            clearInterval(timeId)
        }
    },19)
}
Animate.prototype.update = function(pos) {
    this.dom.style[this.propertyName] = pos + 'px'
}
Animate.prototype.step = function(){
    var t = +new Date
    if(t >= this.startTime + this.duration) {
        this.update(this.endPos)
        return false
    }
    var pos = this.easing(t-this.startTime, this.startPos, this.endPos-this.startPos, this.duration)
    this.update(pos)
}


