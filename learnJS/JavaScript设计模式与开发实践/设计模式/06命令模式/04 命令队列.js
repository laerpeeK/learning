// 宏命令
var closeDoorCommand = {
    execute() {
        console.log('close door')
    },
    undo() {
        console.log('undo close door')
    }
}
var openPcCommand = {
    execute() {
        console.log('open pc command')
    }
}
var openQQCommand = {
    execute() {
        console.log('login QQ')
    }
}

var MacroCommand = function(){
    return {
        commandsList: [],
        add(command) {
            this.commandsList.push(command)
        },
        execute() {
            for(var i = 0, command; command = this.commandsList[i++];) {
                command.execute()
            }
        },
        undo() {
            for(var i = 0, command; command = this.commandsList[i++];) {

                command.undo&&command.undo()
            }
        }
    }
}

var macroCommand = MacroCommand()
macroCommand.add(closeDoorCommand)
macroCommand.add(openPcCommand)
macroCommand.add(openQQCommand)

macroCommand.execute()
macroCommand.undo()