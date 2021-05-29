function addTenPri(count){
    count += 10;
}

function addTenObj(obj) {
    obj.count +=10;
}

var obj = {
    count:10
}
addTenPri(obj.count)
console.log(obj.count) //10
addTenObj(obj)
console.log(obj.count) //20
