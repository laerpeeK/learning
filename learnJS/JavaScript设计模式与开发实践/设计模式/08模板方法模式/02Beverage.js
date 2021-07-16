var Beverage = function(){}

Beverage.prototype.boilWater = function() {
    console.log('把水煮沸')
}

Beverage.prototype.brew = function() {
    throw new Error('子类没有重写brew方法')
}

Beverage.prototype.pourInCup = function() {
    throw new Error('子类没有重写pourInCup方法')
}

Beverage.prototype.addCondiments = function() {
    throw new Error('子类没有重写addCondiments方法')
}

Beverage.prototype.customerWantsCondiments = function() {
    return true
}

Beverage.prototype.init = function() { //模板方法，该方法中封装了子类的算法框架，它作为一个算法的模板，指导子类以何种顺序去执行哪些方法。
    this.boilWater()
    this.brew()
    this.pourInCup()
    if(this.customerWantsCondiments()){
        this.addCondiments()
    }
}




var CoffeeWithHook = function(){}

CoffeeWithHook.prototype = new Beverage()
CoffeeWithHook.prototype.brew = function() {
    console.log('用沸水冲泡咖啡')
}
CoffeeWithHook.prototype.pourInCup = function() {
    console.log('把咖啡倒进杯子')
}
CoffeeWithHook.prototype.addCondiments = function() {
    console.log('加糖和牛奶')
}
CoffeeWithHook.prototype.customerWantsCondiments = function(){
    //return window.confirm('请问需要调料吗？')
    return false
}
var Coffee = new CoffeeWithHook()
Coffee.init()


