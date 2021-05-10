//1.异常处理，callback函数不要放try里
try {
    req.body = JSON.parse(buf, options.reviver)
} catch(err) {
    err.body = buf
    err.status = 400
    //return callback(err)
}
callback()

//2.