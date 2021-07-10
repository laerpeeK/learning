var value = 1000

var myObject = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? number : 1
        console.log(this.value)
    }
}



myObject.increment() //1
