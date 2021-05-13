<h2>Cookie</h2>
var cookieParser = require('cookie-parser)
app.use(cookieParser(secret))

res.cookie(name, value,{signed: true})

var signedCookie = req.cookies.name

res.clearCookie(name)


<h2>Session</h2>
cookie存储会话标识符，会话数据。服务器存储会话状态
