const EventEmitter = require('events')
class emitter extends EventEmitter{}

//订阅
emitter.on('event1',function(message){
    console.log(message)
})

//发布
emitter.emit('event1', 'I am message')

//once
