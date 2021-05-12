var express = require('express')
var app = express()

//env
app.get('env')//development

//port
process.env.PORT = '63124'
app.set('port',3000 || process.env.PORT)//3000

//static
app.use(express.static(__dirname + '/public'))

//middleware-function
app.use(function(req, res, next) {
    conosonle.log('function 需要next()传递')
    next()
})

//app.all匹配get,post,delete,put等http动词
//app.all('*', requireAuthentication, loadUser);

//app.route(path)返回单个路由的实例
//app.route('/events').all().get().post()

//绑定并侦听给定主机与端口的连接
app.listen(app.get('port'),function(){
    console.log('the server is started at:'+app.get('port'))
})


//req参数 1.req.prams.find  2.req.query.find
