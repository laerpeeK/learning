let values = [1, 2, 3, 4];
function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; ++i) {
        sum += arguments[i];
    }
    return sum;
}
console.log(getSum(values)) // 01,2,3,4
console.log(getSum.apply(null, values))// 10
console.log(getSum(...values))// 10
