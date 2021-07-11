/*
给img节点设置src和图片预加载这两个功能，被隔离在两个对象里，它们可以各自变化而不影响对方。

 */

var myImage = (function(){
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return {
        setSrc: function(src) {
            imgNode.src = src
        }
    }
})()

var proxyImage = (function(){
    var img = new Image();
    img.onload = function(){
        myImage.setSrc(this.src)
    }
    return {
        setSrc: function(src) {
            myImage.setSrc('./img/loading.gif')
            img.src = src
        }
    }
})()

proxyImage.setSrc( '../img/whatyouneed.png' );
