var MenuBar = {
    refresh() {
        console.log('刷新菜单界面');
    },
    pullOff() {
        console.log('菜单下架');
    }
};

var MenuBarCommand = function(receiver) {
    return {
        execute() {
            receiver.refresh();
        },
        undo() {
            receiver.pullOff();
        },
    }
};
var setCommandExecute = function(button, command) {
    button.onclick = function() {
        command.execute();
    }
};
var setCommandUndo = function(button, command) {
    button.onclick = function() {
        command.undo();
    }
};

var doMenuBarCommand = MenuBarCommand(MenuBar);

setCommandExecute(btn_execute, doMenuBarCommand);
setCommandUndo(btn_undo, doMenuBarCommand);


