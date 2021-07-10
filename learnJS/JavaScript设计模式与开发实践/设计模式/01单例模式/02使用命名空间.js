var myApp = {}

myApp.namespace = function(name) {
    var parts = name.split('.')
    var current = myApp
    for(var i in parts) {
        if(!current[parts[i]]) {
            current[parts[i]] = {}
        }
        current = current[parts[i]]
    }
}

myApp.namespace('event')
myApp.namespace('dom.style')
console.log(myApp)