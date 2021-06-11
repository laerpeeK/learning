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



## 第八章：对象、类与面向对象编程

内部特性:[[key]]

Object.defineProperties()

Object.definedProperty()

Object.getOwnPropertyDescriptor()

Object.assign():这个方法接收一个目标对象和一个或多个源对象作为参数，然后将每个源对象中可枚举（Object.propertyIsEnumerable()返回true）和自有（Object.hasOwnProperty()返回true）属性复制到目标对象。以字符串和符号为键的属性会被复制。对每个符合条件的属性，这个方法会使用源对象上的[[Get]]取得属性的值，然后使用目标对象上的[[Set]]设置属性的值。



##### Model(模式)

工厂模式：

返回一个显示创建的对象->原型为Object.prototype/constructor:Object



构造函数模式：

ECMAScript的构造函数就是能创建对象的函数

执行New操作符

步骤：

1.在内存中创建一个新对象

2.这个新对象内部[[prototype]]特性（__proto__）被赋值为构造函数的prototype属性

3.构造函数内部的this被赋值为这个新对象（即this指向新对象）

4.执行构造函数内部的代码（给新对象添加属性）

5.如果构造函数返回非空对象，则返回该对象，否则，返回刚创建的新对象

定义自定义构造函数可以确保实例被标识为特定类型

构造函数的主要问题在于，其定义的方法会在每个实例上都创建一遍。



原型模式：

每个函数都会创建一个prototype属性，这个属性是一个对象，包含应该由特定引用类型的实例共享的属性和方法。实际上，这个对象就是通过调用构造函数创建的对象的原型。用原型对象的好处是，在它上面定义的属性和方法可以被对象实例共享。

默认情况下，所有原型对象自动获得一个名为constructor的属性，指回与之关联的构造函数。

实例与构造函数原型之间有直接的联系，但实例与构造函数之间没有。

 构造函数、原型对象和实例 * 是3个完全不同的对象：

构造函数有一个prototype属性 * 引用其原型对象，而这个原型对象也有一个 * constructor属性，引用这个构造函数

isPrototypeOf():确定两个对象的关系

Object.getPrototypeOf():返回参数的内部特性[[Prototype]]的值

Object.setPrototypeOf():可以向实例的私有特性[[Prototype]]写入一个新值。

Object.create()来创建一个新对象，同时为其指定原型.

Object.hasOwnProperty()

hasOwnProperty()只有属性存在于实例上时才返回true。

name属性首先只存在于原型上，所以hasPrototypeProperty()返回true



Object.keys()和Object. getOwnPropertyNames()在适当的时候都可用来代替for-in循环

返回实例上的可枚举的属性

Object.getOwnPropertySymbols（）

重写整个原型会切断最初原型与构造函数的联系，但实例引用的仍然是最初的原型

不同的实例应该有属于自己的属性副本。

##### 继承

接口继承和实现继承。前者只继承方法签名，后者继承实际的方法

原型链：

每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。



##### 类

1.类无提升

2.函数受函数作用域限制，而类受块作用域限制

3.constructor关键字用于在类定义块内部创建类的构造函数。方法名constructor会告诉解释器在使用new操作符创建类的新实例时，应该调用这个函数。

4.默认情况下，类构造函数会在执行之后返回this对象。构造函数返回的对象会被用作实例化的对象，如果没有什么引用新创建的this对象，那么这个对象会被销毁。

5.JavaScript解释器知道使用new和类意味着应该使用constructor函数进行实例化

6.类是JavaScript的一等公民，因此可以像其他对象或函数引用一样把类作为参数传递

使用extends关键字，就可以继承任何拥有[[Construct]]和原型的对象。

ES6给类构造函数和静态方法添加了内部特性[[HomeObject]]，这个特性是一个指针，指向定义该方法的对象。这个指针是自动赋值的，而且只能在JavaScript引擎内部访问。super始终会定义为[[HomeObject]]的原型。

super只能在派生类构造函数和静态方法中使用



如果没有定义类构造函数，在实例化派生类时会调用super()，而且会传入所有传给派生类的参数。

在类构造函数中，不能在调用super()之前引用this。

如果在派生类中显式定义了构造函数，则要么必须在其中调用super()，要么必须在其中返回一个对象。



## 第九章：代理与反射



## 第十章：函数

每个函数都是Function类型的实例，而Function也有属性和方法，跟其他引用类型一样。因为函数是对象，所以函数名就是指向函数对象的指针，而且不一定与函数本身紧密绑定。

ECMAScript 6的所有函数对象都会暴露一个只读的name属性，其中包含关于函数的信息。

ECMAScript函数的参数在内部表现为一个数组，在使用function关键字定义（非箭头）函数时，可以在函数内部访问arguments对象，从中取得传进来的每个参数值

arguments对象的长度是根据传入的参数个数，而非定义函数时给出的命名参数个数确定的

如果函数是使用箭头语法定义的，那么传给函数的参数将不能使用arguments关键字访问，而只能通过定义的命名参数访问

##### 默认参数

在使用默认参数时，arguments对象的值不反映参数的默认值，只反映传给函数的参数。

参数初始化顺序遵循“暂时性死区”规则，即前面定义的参数不能引用后面定义的。

参数也存在于自己的作用域中，它们不能引用函数体的作用域

箭头函数虽然不支持arguments对象，但支持收集参数的定义方式



JavaScript引擎在任何代码执行之前，会先读取函数声明，并在执行上下文中生成函数定义。而函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义。

函数名在ECMAScript中就是变量，所以函数可以用在任何可以使用变量的地方。

##### 函数内部

arguments对象其实还有一个callee属性，是一个指向arguments对象所在函数的指针。

this引用函数上下文对象

在箭头函数中，this引用的是定义箭头函数的上下文。

caller:这个属性引用的是调用当前函数的函数

new.target: 检测函数是否使用new关键字调用,正常调用：undefined new调用指向构造函数



length属性保存函数定义的命名参数的个数

prototype是保存引用类型所有实例方法的地方



apply()和call()真正强大的地方并不是给函数传参，而是控制函数调用上下文即函数体内this值的能力。

bind()方法会创建一个新的函数实例，其this值会被绑定到传给bind()的对象。



理解函数声明与函数表达式之间的区别，关键是理解提升。



在写递归函数时使用arguments.callee可以避免原引用改变的问题。

尾调用优化

外部函数的返回值是一个内部函数的返回值

解决问题---每多调用一次嵌套函数，就会多增加一个栈帧。

关键：外部函数返回值跟内部函数返回值相同

条件：确定外部栈帧真的没有必要存在了

1.代码在严格模式下执行

2.外部函数的返回值是对尾调用函数的调用

3.尾调用函数返回后不需要执行额外的逻辑

4.尾调用函数不是引用外部函数作用域中自由变量的闭包

之所以要求严格模式，主要因为在非严格模式下函数调用中允许使用f.arguments和f.caller，而它们都会引用外部函数的栈帧。

在调用一个函数时，会为这个函数调用创建一个执行上下文，并创建一个作用域链。然后用arguments和其他命名参数来初始化这个函数的活动对象。外部函数的活动对象是内部函数作用域链上的第二个对象。



全局上下文中的叫变量对象，它会在代码执行期间始终存在。

函数局部上下文中的叫活动对象，只在函数执行期间存在。



##### this对象

私有变量包括函数参数、局部变量，以及函数内部定义的其他函数。



## 第十一章：期约与异步函数

Promise是一个有状态的对象，可能处于pending、fulfilled, rejected三种状态之一。且不可逆。

Promise的状态是私有的，不能通过JavaScript检测到。

每个Promise只要状态切换为fulfilled，就会有一个私有的内部值（value）。

类似地，每个期约只要状态切换为rejected，就会有一个私有的内部理由（reason）

executor函数主要有两项职责：

​        1.初始化Promise的异步行为，即改变每个Promise的状态

​        2.控制状态的最终转换，通过resolve(), reject()实现状态变化到fulfilled, rejected。

​		3.同步执行的

静态方法：

​		Promise.resolve()：实例化一个解决的Promise

​		Promise.reject()：实例化一个拒绝的Promise

​		Promise.reject()并没有照搬Promise.resolve()的幂等逻辑

​		

try...catch...是同步模式捕获错误

##### Promise的实例方法：

Promise.prototype.then() :接收最多两个参数：onResolved处理程序和onRejected处理程序。这两个参数都是可选的，如果提供的话，则会在期约分别进入“兑现”和“拒绝”状态时执行。

传给then()的任何非函数类型的参数都会被静默忽略。

如果想只提供onRejected参数，那就要在onResolved参数的位置上传入undefined。

Promise.prototype.catch(onRejected)  equalTo  Promise.prototype.then(null, onRejected)

Promise.prototype.finally(onFinally) :主要用于添加清理代码。 与状态无关的方法，在大多数情况下它将表现为父期约的传递。如果返回的是一个待定的期约，或者onFinally处理程序抛出了错误（显式抛出或返回了一个拒绝期约），则会返回相应的期约（待定或拒绝）。只要期约一解决，新期约仍然会原样后传初始的期约。

抛出异常会返回拒绝的Promise，onRejected在捕获错误后不抛出异常是符合Promise的行为，应该返回一个Promise.resolve

非重入（non-reentrancy）: 当Promise进入fulfiiled/rejected状态时，与该状态相关的处理程序仅仅会被**排期**，而非立即执行。

Promise可以以任何理由拒绝，包括undefined，但最好统一使用object:Error。这样做主要是因为创建错误对象可以让浏览器捕获错误对象中的栈追踪信息，而这些信息对调试是非常关键的

在Promise中抛出错误时，因为错误实际上是从消息队列中异步抛出的，所以并不会阻止运行时继续执行同步指令

Promise连锁：每个Promise实例方法都会返回一个新的Promise对象，而这个对象又有自己的实例方法。

Promise Graph:  Promise连锁可以构建有向非循环图的结构



Promise静态方法：

Promise.all():

​	1.会在一组Promise全部解决后再解决

​	2.接收一个可迭代对象，返回一个新Promise

​	3.一次拒绝导致最终Promise拒绝

​	4.存在永远待定的情况



Promise.race():

​	1.返回一组集合中最先解决或拒绝的Promise的镜像

​	2.接收一个可迭代对象



异步函数 -async

异步函数如果使用return关键字返回了值（如果没有return则会返回undefined），这个值会被Promise.resolve()包装成一个期约对象。

与在期约处理程序中一样，在异步函数中抛出错误会返回拒绝的期约

异步函数主要针对不会马上完成的任务，所以自然需要一种暂停和恢复执行的能力，使用await关键字可以暂停异步函数代码的执行，等待期约解决。

await关键字也只能直接出现在异步函数的定义中。

JavaScript运行时在碰到await关键字时，会记录在哪里暂停执行。等到await右边的值可用了，JavaScript运行时会向消息队列中推送一个任务，这个任务会恢复异步函数的执行。





## 第十二章：BOM对象

CSS像素是We b开发中使用的统一像素单位。这个单位的背后其实是一个角度：0.0213°。

所有超时执行的代码（函数）都会在全局作用域中的一个匿名函数中运行，因此函数中的this值在非严格模式下始终指向window，而在严格模式下是undefined。如果给setTimeout()提供了一个箭头函数，那么this会保留为定义它时所在的词汇作用域。

location:

location.search ?a=aaa&b=bbb

locations.hash = '#contents'

URLSearchParams  API: get(), set(), delete()

window.location和document.location指向同一对象

history对象表示当前窗口首次使用以来用户的导航历史记录。

## 第十三章：客户端能力检测

## 第十四章：DOM

## 第十五章：DOM扩展

## 第十六章：DOM2和DOM3

## 第十七章：事件

JavaScript与HTML的交互是通过事件实现的，事件代表文档或浏览器窗口中某个有意义的时刻。

DOM2 Events规范规定事件流分为3个阶段：事件捕获、到达目标和事件冒泡。

在DOM中发生事件时，所有相关信息都会被收集并存储在一个名为event的对象中。

在事件处理程序内部，this对象始终等于currentTarget的值，而target只包含事件的实际目标。

stopPropagation()方法用于立即阻止事件流在DOM结构中传播，取消后续的事件捕获或冒泡。

event对象只在事件处理程序执行期间存在，一旦执行完毕，就会被销毁。

## 第十八章：动画与Canvas图形

requestAnimationFrame()

一般计算机显示器的屏幕刷新率都是60Hz，基本上意味着每秒需要重绘60次。

实现平滑动画最佳的重绘间隔为1000毫秒/60，大约17毫秒。

