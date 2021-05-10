function a(cb){
    setTimeout(function(){
        cb('a_setTime')
    },0)
    process.nextTick(function(){
        cb('a_nextTick')
    })
}

function b(cb){
    setTimeout(function(){
        cb('b_setTimeout')
    })
    process.nextTick(function(){
        cb('b_nextTick')
    })

}

function c(cb){
    cb('c')
}

a(console.log)
b(console.log)
c(console.log)