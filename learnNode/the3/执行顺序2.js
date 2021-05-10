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














console.log('normal exec')