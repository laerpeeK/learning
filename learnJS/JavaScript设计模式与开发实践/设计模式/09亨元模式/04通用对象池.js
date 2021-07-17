var objectPoolFactory = function(createObjFn) {
    var objectPool = []
    return {
        create(){
            var obj = objectPool.length === 0?
                createObjFn.apply(this,arguments): objectPool.shift()

            return obj
        },
        recover(obj){
            objectPool.push(obj)
        }
    }
}

var iframeFactory = objectPoolFactory(function(){
    var iframe = document.createElement('iframe')
    document.body.appendChild(iframe)

    iframe.onload = function(){
        iframe.onload = null //防止iframe重复加载的bug
        iframeFactory.recover(iframe) //iframe加载完成之后回收节点
    }
    return iframe
})