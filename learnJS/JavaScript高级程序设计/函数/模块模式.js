let application = function() {
    //私有变量和私有函数
    let components = new Array()

    //初始化
    components.push(new BaseComponent())

    //公共接口
    return {
        getComponentCount() {
            return components.length
        },
        registerComponent(component) {
            if(typeof component === 'object') {
                components.push(component)
            }
        }
    }
}()
