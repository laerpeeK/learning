var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()

app.use(cookieParser('jack'))


app.use(function(req, res, next){
    console.log(req.signedCookies.key)
    next()
})

app.get('/',function(req,res){
        res.cookie('key', 'value',{signed: true})
    res.send('Ok')
})

app.listen(3000,function(){
    console.log('success')
})
