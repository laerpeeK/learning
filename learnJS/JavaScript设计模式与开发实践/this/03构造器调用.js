var MyClass_simplyType = function() {
    this.name = 'sven'
    return 'anne'
}

var MyClass_referenceType = function() {
    this.name = 'sven'
    return {
        name: 'jack'
    }
}

var objA = new MyClass_simplyType()
var objB = new MyClass_referenceType()
console.log(objA.name) //sven
console.log(objB.name) //jack