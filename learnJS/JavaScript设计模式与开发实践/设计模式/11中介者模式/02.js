function Player(name) {
    this.name = name
    this.enemy = null
}

Player.prototype.win = function(){
    console.log(this.name + ' won')
}
Player.prototype.lose = function() {
    console.log(this.name + ' lost')
}
Player.prototype.die = function() {
    this.lose()
    this.enemy.win()
}

var player1 = new Player('皮蛋')
var player2 = new Player('小乖')

player1.enemy = player2
player2.enemy = player1

player1.die()

