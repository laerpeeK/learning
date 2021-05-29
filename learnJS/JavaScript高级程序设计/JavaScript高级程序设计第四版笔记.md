# JavaScript高级程序设计第四版笔记

## 第一章：什么是JavaScript

### ECMA-262定义了语法，类型，语句，关键字，保留字，操作符，全局对象

ES*意味着第几版ECMA-262，不同浏览器支持版本不同

ES1：对象要与平台无关，支持多语言

ES2：为了更新后严格符合ISO/IEC-16262的要求，并没增减或改变任何特性

ES3：更新了字符串处理、错误定义和数值输出，还增加了对正则表达式、新的控制语句、try/catch 异常处理的支持。

ES4：ES3.1

**ES5**：

​	1.包括强类型变量、新语句和数据结构、真正的类和经典的继承，以及操作数据的新手段

​	2.原生的解析和序列化 JSON数据的 JSON 对象、方便 继承和高级属性定义的方法，以及新的增强 ECMAScript引擎解释和执行代码能力的严格模式

**ES6**：正式支持了类、模块、迭代器、生成器、箭头 函数、期约、反射、代理和众多新的数据类型

ES7：包含少量语法层面的 增强，如 Array.prototype.includes 和指数操作符

ES8：主要增加了异步函数（async/ await）、SharedArrayBuffer 及 Atomics API，以及 Object.values()/Object.entries()/Object. getOwnPropertyDescriptors()和字符串填充方法，另外明确支持对象字面量后的逗号

ES9：包括异步迭代、剩余和 扩展属性、一组新的正则表达式特性、Promise finally()，以及模板字面量修订

ES10：修订增加了 Array.prototype. flat()/flatMap()、String.prototype.trimStart()/trimEnd()、Object.fromEntries()方 法，以及 Symbol.prototype.description 属性，明确定义了 Function.prototype.toString() 的返回值并固定了 Array.prototype.sort()的顺序。另外，这次修订解决了与 JSON字符串兼容的 问题，并定义了 catch 子句的可选绑定



### DOM——Document Object Model

DOM通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构

DOM出现的原因：保持Web跨平台的本性

DOMLevel1: DOM Core & DOM HTML 前者提供一种映射XML文档，从而方便访问和操作文档任意部分的方式;后者扩展了前者，并增加了特定于HTML的对象和方法。Level1的目标是映射文档结构

DOMLevel2：展增加了对（DHTML 早就支持的）鼠标和用户界面事件、范围、遍历（迭代 DOM 节点的方法）的支 持，而且通过对象接口支持了层叠样式表（CSS）。另外，DOM Level 1中的 DOM Core也被扩展以包含 对 XML命名空间的支持。DOMLevel2新增：

​	DOM视图：描述追踪文档不同视图（如应用 CSS样式前后的文档）的接口。

​    DOM事件：描述事件及事件处理的接口。

​    DOM样式：描述处理元素 CSS样式的接口。

​    DOM遍历和范围：描述遍历和操作 DOM树的接口。 

DOMLevel3：进一步扩展了DOM，增加了以统一的方式加载和保存文档的方法（包含在一个叫DOM Load and Save的新模块中），还有验证文档的方法（DOM Validation）。

XML：一种包含了数据以及数据说明的文本格式规范。容纳数据并且让数据能够被解析。

HTML：语法不可扩展。

### BOM——Browser Object Model

提供与浏览器交互的方法和接口

HTML5以正式规范的形式涵盖了尽可能多的 BOM特性



## 第二章：HTML中的JavaScript

async：立即开始下载脚本，但不阻止其他页面动作

defer:	脚本可以延迟到文档完全被解析和显示后再执行

type: module ES6

使用src属性的script元素会忽略行内代码



### 第三章：语言基础

变量：松散类型，可以用于保存任何类型的数据，每个变量只不过是一个用于保存任意值的命名占位符。

var: 1.函数作用域。2.变量提升。

块级作用域由近的一对包含花括号{}界定

let：1.块作用域。2.不可出现冗余声明。3.使用let在全局作用域中声明的变量不会成为window对象的属性。4.for循环块

const：1.声明时必须初始化。2.限制的是指向变量的引用。

数据类型：Undefined（未初始化变量）, Null（空对象指针）, Boolean, Number, String, Symbol  &  Object、Function、Array、Date、RegExp

两种基础初始化方式： let BMW5 = undefined;  let car =  null

浮点值的精确度高可达 17位小数，但在算术计算中远不如整数精确, 之所以存在这种舍入错误，是因为使用了IEEE 754数值。

Number.parseInt(value,进制)

模板字面量换行： \n

<u>Symbol</u>：1.符号是原始值，且符号实例唯一不可变。

let genericSymbol = Symbol(); let otherGenericSymbol = Symbol(); 

genericSymbol === otherGenericSymbol //false

2.不能和new 一起使用

#### Object

constructor:用于创建当前对象的函数

hasOwnProperty(propertyName):用于判断当前对象实例是否存在给的属性

isPropertypeOf(object):用于判断当前对象是否为另一个对象的原型

toString():返回对象的字符串表示

valueOf()：返回对象对象的字符串、数值或布尔值表示

DOM&BOM不受ECMA对象约束

keys()：返回属性名构成的数组

values()：

entries()



for-in：枚举对象中非符号键属性,无序

for-of：遍历可迭代对象的元素



## 第四章：变量、作用域与内存

原始值：

​	1.保存原始值的变量是按值访问的

​	2.原始值复制时会被复制到新变量的位置

引用值：

​	1.JavaScript不允许直接访问内存位置，按引用访问

​	2.复制的值实际上为一个指针，指向存储在堆内存中的对象

ECMAScript所有的函数的参数都是按值传递的。

引用值类型判断： 

​	variale instanceof constructor

​	Object.prototype.toString.call(variable)



#### 执行上下文与作用域

变量或函数的上下文决定 了它们可以访问哪些数据，以及它们的行为。

上下文中的代码在执行的时候，会创建变量对象的一个作用域链（scope chain）。这个作用域链决定 了各级上下文中的代码在访问变量和函数时的顺序。

#### 垃圾回收策略

标记请理：在不在执行上下文中

​	垃圾回收程序运行时，会标记内存中存储的所有变量，然后将所有在上下文中的变量以及被在上下文中的变量引用的变量的标记去除。然后清除所有被标记的变量。

引用计数：保存被引用的次数->循环引用问题

内存泄漏

​	滥用全局变量，定时器，闭包

解除对一个值的引用并不会自动导致相关内存被回收。解除引用的关键在于确保相关 的值已经不在上下文里了，因此它在下次垃圾回收时会被回收。 

理论上，如果能够合理使用分配的内存，同时避免多余的垃圾回收，那就可以保住因 释放内存而损失的性能。 



## 第五章：基本引用类型

Date:

new Date():保存当前日期和时间

now():返回方法执行时日期和时间的毫秒数

toLocalString():当地时间

toString():带时区的时间

valueOf():返回日期的毫秒表示

...



RegExp:

exec():这个方法只接收一个参数，即要应 用模式的字符串。如果找到了匹配项，则返回包含第一个匹配信息的数组；如果没找到匹配项，则返回 null。

test():接收一个字符串参数。如果输入的文本与模式匹配，则参数 返回 true，否则返回 false。

valueOf():返回正则表达式本身



在以读模式访问字符串值得任何时候，执行以下三步。

1.创建一个String类型的实例

2.调用实例上的特定方法

3.销毁实例

这意味着不能在运行时给原始值添加属性和方法



 Number:

toFixed(n):四舍五入保留n位小数

isInteger():判断一个数值是否保存为整数



String:

concat():拼接字符串

slice()&substring():提取子字符串，第一个参数开始，第二个参数结束

substr():第二个参数表示返回的字符数

indexOf & lastIndexOf

startWith() & endWith() includes()

trim():这个方法会创建字符串的一个副本，删除前、后所有空格符，再返回结果。

repeat():这个方法接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果。

padStart(),padEnd():第一个参数是长度，第二个参数是可选的填充字符串，默认为空格

展开运算符依赖迭代器

toLowerCase() & toUpperCase()

match():返回的数组与RegExp对象的exec()方法返回的数组是一样的：第一个元素是与整个模式匹配的字符串，其余元素则是与表达式中的捕获组匹配的字符串（如果有的话）

search():返回模式第一个匹配的位置索引，如果没找到则返回-1。

replace():第一个参数可以是一个RegExp对象或一个字符串（这个字符串不会转换为正则表达式），第二个参数可以是一个字符串或一个函数。如果第一个参数是字符串，那么只会替换第一个子字符串。要想替换所有子字符串，第一个参数必须为正则表达式并且带全局标记，

localeCompare():

Math:

min() , max():一组数值中的最值

ceil():向上舍入为最接近的整数

floor():向下舍入为最接近的整数

round():四舍五入

fround():返回数值最接近的32位浮点值表示

random():返回0-1范围内的随机数



JavaScript比较独特的一点是，函数实际上是Function类型的实例，也就是说函数也是对象。因为函数也是对象，所以函数也有方法，可以用于增强其能力。



## 第六章：集合引用类型

Array:

from(类数组对象，可选的映射函数参数)

of():可以把一组参数转换为数组

isArray():目的就是确定一个值是否为数组，而不用管它是在哪个全局执行上下文中创建的

keys()返回数组索引的迭代器，values()返回数组元素的迭代器，而entries()返回索引/值对的迭代器

fill(填充值，第几个开始，小于第几个)

reverse()

sort()

concat()

splice(开始位置，删除数量，替换元素)

find(), findIndex():find()返回第一个匹配的元素，findIndex()返回第一个匹配元素的索引。

forEach()没有返回值，map()返回结果数组

reduce(),reduceRight()：values.reduce((prev, cur, index, array) => prev + cur)



Map:

size

set(key,value)

get(key) = value

has(key) true

clear()

与Object只能使用数值、字符串或符号作为键不同，Map可以使用任何JavaScript数据类型作为键。

##### Map or Object?

给定固定大小的内存，Map大约可以比Object多存储50%的键/值对。

如果代码涉及大量插入操作，那么显然Map的性能更佳。

如果代码涉及大量查找操作，那么某些情况下可能选择Object更好一些。

如果代码涉及大量删除操作，那么毫无疑问应该选择Map。



WeakMap中的“weak”（弱） ，描述的是JavaScript垃圾回收程序对待“弱映射”中键的方式

弱映射中的键只能是Object或者继承自Object的类型，尝试使用非对象设置键会抛出TypeError。值的类型没有限制

只要键存在，键/值对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收。如果其他地方没有引用就删除



Set:

size

add()

has()

Set会维护值插入时的顺序，因此支持按顺序迭代

弱集合中的值只能是Object或者继承自Object的类型



## 第七章： 迭代器与生成器

可迭代协议：

​	1.支持迭代的自我识别能力。

​	2.创建实现Iterator接口的对象的能力。

Symbol.iterator

迭代器协议：

​	闭包+return{next(), return()}



生成器是ECMAScript  6新增的一个极为灵活的结构，拥有在一个函数块内暂停和恢复代码执行的能力。

生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器。

箭头函数不能用来定义生成器函数



## 第十八章：动画与Canvas图形

requestAnimationFrame()

一般计算机显示器的屏幕刷新率都是60Hz，基本上意味着每秒需要重绘60次。

实现平滑动画最佳的重绘间隔为1000毫秒/60，大约17毫秒。

