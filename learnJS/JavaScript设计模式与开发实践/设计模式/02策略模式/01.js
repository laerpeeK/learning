/*
定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换
设计模式的主题：
    将不变的部分和变化的部分隔离开来
    策略类 & 环境类context
    JavaScript中的“可以相互替换使用”表现为它们具有相同的目标和意图

策略模式的目的就是将算法的使用方式（不变）与算法的实现分离开来。
        运用：轻易地将一个算法替换为另一个算法。
策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句

 */
var strategies = {
    'S': function(salary) {
        return salary * 4
    },
    'A': function(salary) {
        return salary * 3
    },
    'B': function(salary) {
        return salary * 2
    }
}

var calculateBonus = function(level, salary) {
    return strategies[level](salary)
}