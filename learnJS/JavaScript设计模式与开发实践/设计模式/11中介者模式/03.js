// player1.partners = [player1, player2, player3, player4]
// player1.enemies = [player5, player6, player7, player8]
//
// player5.partners = [player5, player6, player7, player8]
// player5.enemies = [player1, player2, player3, player4]

var players = []

function Player(name, teamColor) {
    this.partners = [] //队友列表
    this.enemies = [] //敌人列表
    this.state = 'live' //玩家状态
    this.name = name //角色名字
    this.teamColor = teamColor //队伍颜色
}

Player.prototype.win = function(){ //玩家团队胜利
    console.log('winner: '+ this.name)
}

Player.prototype.lose = function(){ //玩家团队失败
    console.log('loser: '+ this.name)
}

Player.prototype.die = function(){ //玩家死亡
    var all_dead = true
    this.state = 'dead' //设置玩家状态为死亡

    for(var i = 0, partner; partner = this.partners[i++];) {
        if(partner.state !== 'dead') {
            all_dead = false //如果还有一个队友没有死亡，则游戏还未失败
            break
        }
    }

    if(all_dead === true) { //如果队友全部死亡
        this.lose()
        for(var i = 0, partner; partner = this.partners[i++];) { //通知所有队友玩家游戏失败
            partner.lose()
        }
        for(var i = 0, enemy; enemy = this.enemies[i++];) { //通知所有敌人游戏胜利
            enemy.win()
        }
    }
}

var playerFactory = function(name, teamColor) {
    var newPlayer = new Player(name, teamColor) //创建新玩家

    for(var i = 0, player; player = players[i++];) { //通知所有的玩家，有新角色加入
        if(player.teamColor === newPlayer.teamColor) { //如果是同一队伍的玩家
            player.partners.push(newPlayer) //相互加到队友列表
            newPlayer.partners.push(player)
        } else {
            player.enemies.push(newPlayer)
            newPlayer.enemies.push(player)
        }
    }
    players.push(newPlayer)

    return newPlayer
}
//红队：
var player1 = playerFactory( '皮蛋', 'red' ),
    player2 = playerFactory( '小乖', 'red' ),
    player3 = playerFactory( '宝宝', 'red' ),
    player4 = playerFactory( '小强', 'red' );

//蓝队：
var player5 = playerFactory( '黑妞', 'blue' ),
    player6 = playerFactory( '葱头', 'blue' ),
    player7 = playerFactory( '胖墩', 'blue' ),
    player8 = playerFactory( '海盗', 'blue' );


player1.die();
player2.die();
player4.die();
player3.die();