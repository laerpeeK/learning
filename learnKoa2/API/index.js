const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {
    console.log(app)
})


app.listen(3000, () => {
    console.log('http-server starting at port 3000')
})