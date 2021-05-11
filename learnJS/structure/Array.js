Array.prototype.unshift = function(...args) {
    let result = [...args,...this];
    Object.assign(this,result);
}

Array.prototype.shift = function() {
    if(this.length === 0) {
        return undefined;
    }
    let result = this[0];
    for(let i = 0; i < this.length-1; i++) {
        this[i] = this[i+1];
    }
    this.length--;
    return result;
}