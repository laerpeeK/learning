/***
 状态模式的关键是把事物的每种状态都封装成单独的类，跟此种状态有关的行为都被封装在这个类的内部。
 允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类。
 */



//OffLightState
var OffLightState = function(light) {
    this.light = light;
}

OffLightState.prototype.buttonWasPressed = function() {
    console.log('弱光')
    this.light.setState(this.light.weakLightState) //切换状态
}


//WeakLightState
var WeakLightState = function(light) {
    this.light = light
}

WeakLightState.prototype.buttonWasPressed = function() {
    console.log('强光')
    this.light.setState(this.light.strongLightState)
}

//StrongLightState
var StrongLightState = function(light) {
    this.light = light
}

StrongLightState.prototype.buttonWasPressed = function() {
    console.log('关灯')
    this.light.setState(this.light.offLightState)
}



var Light = function() {
    this.offLightState = new OffLightState(this) // 持有状态对象的引用
    this.weakLightState = new WeakLightState(this)
    this.strongLightState = new StrongLightState(this)
    this.button = null
}

Light.prototype.init = function() {
    var button = document.creElement('button'),
        self = this

    this.button = document.body.appendChild(button)
    this.button.innerHTML = '开关'

    this.currState = this.offLightState //设置当前状态

    this.button.onclick = function() {
        self.currState.buttonWasPressed()
    }

}

Light.prototype.setState = function(newState) {
    this.currState = newState
}
var light = new Light()
light.init()


//父类的buttonWasPressed 方法必须被重写
var State = function(){}
State.prototype.buttonWasPressed = function() {
    throw new Error('父类的buttonWasPressed方法必须被重写')
}

OffLightState.__proto__ = State.prototype //子类继承父类
WeakLightState.__proto__ = State.prototype
StrongLightState._proto__ = State.prototype