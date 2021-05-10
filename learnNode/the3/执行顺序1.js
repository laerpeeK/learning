process.nextTick(function(){
    console.log('nextTick1')
})
process.nextTick(function(){
    console.log('nextTick2')
})
setImmediate(function(){
    console.log('setImmediate1')
    process.nextTick(function(){
        console.log('violence insert ')
    })
})
setImmediate(function(){
    console.log('setImmediate2')
})
console.log('normal exec')