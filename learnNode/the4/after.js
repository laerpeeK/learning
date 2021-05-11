
//发布订阅多对一
var after = function(times, callback) {
    var count = 0, result = {} //哨兵变量
    return  function(key, value) {
        results[key] = value
        count++
        if(count === times) {
            callback(results)
        }
    }
}

var emitter = new events.Emitter()
var done = after(times, render)

emitter.on('done', done)
emitter.on('done', other)

fs.readFile(tp,'utf8',function(err, template) {
    emitter.emit('done', 'template',template)
})

db.query(sql, function(err,data){
    emitter.emit('done','data',data)
})

