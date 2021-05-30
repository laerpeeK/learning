"use strict"
function fib(n) {
    return fibImpl(0, 1, n)
}
function fibImpl(a, b , n) {
    if(n === 0) {
        return a
    }
    return fibImpl(b,a+b,n-1)
}
