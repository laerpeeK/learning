var Light = function(){
    this.currState = FSM.off
    this.button = null
}

Light.prototype.init = function() {
    var button = document.createElement('button')
    self = this

    button.innerHTML = '已关灯'
    this.button = document.body.appendChild(button)

    this.button.onclick = function() {
        self.currState.buttonWasPressed.call(self) //把请求委托给FSM状态机
    }
}

var FSM = {
    off:{
        buttonWasPressed: function() {
            console.log('关灯')
            this.button.innerHTML = '下一次按我是开灯'
            this.currState = FSM.on
        }
    },
    on: {
        buttonWasPressed: function() {
            console.log('开灯')
            this.button.innerHTML = '下一次按我是关灯'
        }
    }
}

var light = new Light()
light.init()
