var makeSound = function(animal) {
    if(animal instanceof Duck) {
        console.log('嘎嘎嘎')
    } else if(animal instanceof Chicken) {
        console.log('咯咯咯')
    }
}

var Duck = function(){}
var Chicken = function(){}
//把主语和动作分隔开来分别写代码  不变和可变  都会叫，叫声不同
makeSound(new Duck()) //嘎嘎嘎
makeSound(new Chicken()) //咯咯咯

