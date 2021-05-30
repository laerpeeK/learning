var fs = require('fs')
fs.readFile('f.txt', function(err, data){
    if(err) {
        return console.err(err)
    }
    console.log(data.toString('utf-8'))
})
