var Upload = function(uploadType) { //uploadType区分是控件还是flash
    this.uploadType = uploadType
}

Upload.prototype.delFile = function (id){
    uploadManager.setExternalState(id, this) //给共享对象设置正确的fileSize

    if(this.fileSize < 3000) {
        return this.dom.parentNode.removeChild(this.dom)
    }

    if(window.confirm('确定要删除该文件吗？' + this.fileName)) {
        return this.dom.parentNode.removeChild(this.dom)
    }
}

var UploadFactory = (function(){ //创建upload对象
   var createdFlyWeightObjs = {}
   return {
       create(uploadType) {
           if(createdFlyWeightObjs[uploadType]) {
               return createdFlyWeightObjs[uploadType]
           }
           return createdFlyWeightObjs[uploadType] = new Upload(uploadType)
       }
   }
})()

var uploadManager = (function(){
    var uploadDatabase = {}
    return {
        add(id, uploadType, fileName, fileSize){
            var flyWeightObj = UploadFactory.create(uploadType)

            var dom = document.createElement('div')
            dom.innerHTML = `
                <span>File Name: ${fileName} + File Size: ${fileSize}</span>
                <button class="delFile">delete</button>
            `
            dom.querySelector('.delFile').onclick = function(){
                flyWeightObj.delFile(id)
            }
            document.body.appendChild(dom)
            uploadDatabase[id] = {
                fileName,
                fileSize,
                dom,
            }
            return flyWeightObj
        },
        setExternalState(id, flyWeightObj) {
            var uploadData = uploadDatabase[id]
            for(var i in uploadData) {
                flyWeightObj[i] = uploadData[i]
            }
        }
    }
})()

var id = 0

window.startUpload = function(uploadType, files) {
    for(var i = 0, file; file = files[i++];) {
        var uploadObj = uploadManager.add(++id, uploadType, file.fileName, file.fileSize)
    }
}

