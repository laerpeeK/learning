var Beverage = function(param) {
    var boilWater = function(){
        console.log('把水煮沸')
    }
    var brew =param.brew || function() {
        throw new Error('必须传递brew方法')
    }
    var pourInCup = param.pourInCup || function() {
        throw new Error('必须传递pourInCup方法')
    }
    var addCondiments = param.addCondiments || function() {
        throw new Error('必须传递addCondiments方法')
    }
    var F = function(){}
    F.prototype.init = function(){
        boilWater();
        pourInCup();
        brew();
        addCondiments();
    }
    return F;
}

var Coffee = Beverage({
    pourInCup() {
        console.log('把咖啡倒进杯子')
    },
    brew() {
        console.log('用沸水冲泡咖啡')
    },
    addCondiments() {
        console.log('加糖和牛奶')
    }
})

var coffee = new Coffee()
coffee.init()
