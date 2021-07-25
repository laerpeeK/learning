/***
 适配器模式的作用是解决两个软件实体间的接口不兼容的问题。
 适配器模式主要用来解决两个已有接口之间不匹配的问题，它不考虑这些接口是怎样实
 现的，也不考虑它们将来可能会如何演化。适配器模式不需要改变已有的接口，就能够
 使它们协同作用
 装饰者模式和代理模式也不会改变原有对象的接口，但装饰者模式的作用是为了给对象
 增加功能。装饰者模式常常形成一条长的装饰链，而适配器模式通常只包装一次。代理
 模式是为了控制对对象的访问，通常也只包装一次
 外观模式的作用倒是和适配器比较相似，有人把外观模式看成一组对象的适配器，但外
 观模式最显著的特点是定义了一个新的接口
 */
var googleMap = {
    show: function(){
        console.log('开始渲染谷歌地图')
    }
}

var baiduMap = {
    display: function() {
        console.log('开始渲染百度地图')
    }
}

var baiduMapAdapter = {
    show: function() {
        return baiduMap.display()
    }
}

renderMap(googleMap)
renderMap(baiduMapAdapter)