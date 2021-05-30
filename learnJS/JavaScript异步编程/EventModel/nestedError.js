/*
运行C时， A B 不在内存堆栈
 */
setTimeout(function A(){
    setTimeout(function B(){
        setTimeout(function C(){
            throw new Error('Somethind terrible has happened')
        })
    })
})