var n = 1
search: while(true) {
    n +=1
    for(let i = 2; i <= Math.sqrt(n); i+= 1)
        if(n%i == 0)
            continue search;
        //found a prime
    postMessage(n)
}

/*
var worker = new Worker('worker.js')
worker.onmessage = function(e){
    document.getElementById('result').textContent = event.data
}

 */