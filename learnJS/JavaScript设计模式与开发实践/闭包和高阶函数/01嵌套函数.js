var a = 1
var func1 = function() {
    var b = 2
    var func2 = function() {
        var c = 3
        console.log(b) //2
        console.log(a) //1
    }
    func2()
    console.log(c) //c is not defined
}
func1()