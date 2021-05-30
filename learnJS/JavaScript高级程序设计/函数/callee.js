function factorial(num) {
    if(num <=1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1)
    }
}
//arguments.callee -> factorial
console.log(factorial(5)) //120

//严格模式下 (name function expression)
const factorial_f = (function f(num){
    if(num <= 1) {
        return 1
    } else {
        return num * f(num - 1)
    }
})

