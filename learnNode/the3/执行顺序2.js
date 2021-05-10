process.nextTick(function(){
    console.log('a')
    process.nextTick(function(){
        console.log('b')
    })
    setImmediate(function(){
        console.log('d')
    })
})
setImmediate(function(){
    console.log('e')
    process.nextTick(function(){
        console.log('f')
        setImmediate(function(){
            console.log('h')
        })
    })
})
function speak(callback){
    callback('a')
}
speak(console.log)
console.log('normal exec')