//Folder
var Folder = function(name) {
    this.name = name
    this.files = []
    this.parent = null
}

Folder.prototype.add = function(file) {
    file.parent = this
    this.files.push(file)
}

Folder.prototype.scan = function() {
    console.log(`开始扫描文件夹: ${this.name}`)
    for(var i = 0, file, files = this.files; file = files[i++];) {
        file.scan()
    }
}

Folder.prototype.remove = function() {
    if(!this.parent) {
        return;
    }
    for(var files = this.parent.files,l = files.length - 1; l >= 0; l--){
        var file = files[l]
        if(file === this) {
            files.splice(l,1)
        }
    }
}

//File
var File = function(name) {
    this.name = name
    this.parent = null
}

File.prototype.add = function() {
    throw new Error('文件夹下面不能再添加文件')
}

File.prototype.scan = function() {
    console.log(`开始扫描文件: ${this.name}`)
}

File.prototype.remove = function() {
    if(!this.parent) {
        return;
    }
    for(var files = this.parent.files, l = files.length - 1; l>= 0; l--) {
        var file = files[l]
        if(file === this) {
            files.splice(l,1)
        }
    }
}



var folder = new Folder('学习资料')
var folder1 = new Folder('javaScript')
var folder2 = new Folder('jQuery')

var file1 = new File('JavaScript设计模式与开发实践')
var file2 = new File('精通jQuery')
var file3 = new File('重构与模式')

folder1.add(file1)
folder2.add(file2)

folder.add(folder1)
folder.add(folder2)
folder.add(file3)

var folder3 = new Folder('Nodejs')
var file4 = new File('深入浅出Node.js')
folder3.add(file4)

var file5 = new File(('JavaScript语言精髓与编程实践'))

folder.add(folder3)
folder.add(file5)
folder.scan()