var name = 'globalName'

var getName = function() {
    return this.name
}

console.log(getName()) //浏览器下 globalName
