##### truthy&falsy: 

Truthy和Falsy是一个大范围，是广义上的真和假；而true和false则是两个明确的值，是狭义上的真和假

判定一个数组和对象是否为真时，不能用Boolean方法。数组一般判定其长度(人为设定的数组长度不算)，长度为0时，即表示为空数组；对象则一般转换成JSON字符串，看是否与'{}’相等(JSON.stringify(data) === “{}”)，相等则表示该对象为空对象。

reference:https://www.ztsky.cn/1926.html



##### property&attribute:

property(属性)：DOM中的属性，JavaScript的对象

attribute(特性)：HTML标签上的特性，它的值只能是字符串

**attributes是属于property的一个子集**，它保存了HTML标签上定义属性。

reference:https://www.cnblogs.com/lmjZone/p/8760232.html



##### 幂等性：

​        在编程中一个幂等操作的特点是其任意多次执行所产生的影响均与一次执行的影响相同。幂等函数，或幂等方法，是指可以使用相同参数重复执行，并能获得相同结果的函数。

