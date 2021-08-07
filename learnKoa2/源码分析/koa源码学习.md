摘自：[新一代web框架源码学习][https://zhuanlan.zhihu.com/p/48328059]



**app**

const Koa = require('koa')

const app = new Koa()



* proxy: 表示是否开启代理信任开关,默认为false，如果开启代理信任，对于获取request请求中的host，protocol，ip分别优先从Header字段中的X-Forwarded-Host，X-Forwarded-Proto，X-Forwarded-For获取。

* env: node运行环境  this.env = process.env.NODE_ENV || 'development'

* keys: app.keys是一个设置签名的Cookie密钥的数组，用于生成cookies对象

* subdomainOffset：表示子域名是从第几级开始的，这个参数决定了request.subdomains的返回结果，默认值为2

* middleware：app对应的中间件数组，使用app.use函数会将会将中间件加到该数组中， 特点：当一个中间件调用next()，则该函数暂停并将控制传递给定义的下一个中间件。当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为，类似一个入栈出栈的模式。

* context：这个是创建中间件中使用的“ctx”的原型，直接使用app.context意义不大，而且app.context上很多属性其实是为ctx准备的，直接用app.context调用会报错。

  context主要有以下用途：

  1. 我们可以在context对象上添加一些全局路由里公用的属性，这样不需要每次请求都在中间件里赋值。
  2. request: 创建ctx.request的原型，可以给app.context添加一些ctx.request中用到的公共属性。
  3. response: 这个是创建ctx.response的原型,可以给app.context添加一些ctx.request中用到的公共属性。

* **app**的主要函数：

  1. use： 给app.middleware数组中添加中间件。
  2. listen: app.listen函数是创建服务的入口，只有调用app.listen函数以后，所有的中间件才会被使用。
  3. allback函数：返回一个函数供http.createServer() 方法的回调函数来处理请求。你也可以使用此回调函数将koa应用程序挂载到Connect/Express应用程序中。

* **ctx**: ctx是中间件中的上下文环境，也是koa框架中最常用最重要的对象，每个请求都会根据app.context创建一个新的ctx，并在中间件中作为接收器引用ctx对象上会绑定app,request,response等对象。

* **koa异常的处理**: Koa继承了Emitter类，所以我们可以给app添加error事件的处理函数。

* **koa中常用的中间件**

  * koa-compose: 用于将多个中间件合并成一个中间件
  * koa-router：路由处理中间件
  * 】
  * 

* 

  