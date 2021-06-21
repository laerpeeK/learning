var duck = {
    duckSinging: function() {
        console.log('嘎嘎嘎')
    }
}

var chicken = {
    duckSinging: function() {
        console.log('嘎嘎嘎')
    }
}

var choir = [] //合唱团

var joinChoir = function(animal) {
    if(animal && typeof animal.duckSinging === 'function') {
        choir.push(animal)
        console.log('恭喜加入合唱团')
        console.log('合唱团已有成员数量：'+ choir.length)
    }
}
//无需验证类型，只需保证它们拥有duckSinging方法
joinChoir(duck)
joinChoir(chicken)