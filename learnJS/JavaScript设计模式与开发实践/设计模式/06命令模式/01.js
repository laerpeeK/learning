/*
命令模式中的命令（command）指的是一个执行某些特定事情的指令。
命令模式最常见的应用场景是：有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是什么。
解除请求发送者和请求接收者彼此间的耦合关系。
傻瓜式命令：命令模式都会在command对象中保存一个接收者来负责真正执行客户的请求，它只负责把客户的请求转交给接收者来执行。
智能式命令：不需要接收者存在直接实现命令。
 */