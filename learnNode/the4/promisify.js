import {Promise, Deferred} from "./promise&deferred";
//
// res.then(
//     function() {
//         //Done
//     },
//     function() {
//         //Error
//     },
//     function(chunk) {//chunk可以理解为流数据中的一块数据
//         console.log('BODY: '+chunk)
//     }
// )

var promisify = function(res) {
    var deferred = new Deferred()
    var result = ''
    res.on('data', function(chunk) {
        result += chunk
        deferred.progress(chunk)
    })
    res.on('end',function() {
        deferred.resolve(result)
    })
    res.on('err',function(err) {
        deferred.reject(err)
    })
    return deferred.promise
}

//
promisify(res).then(
    function(){
        //Done
    }, function(err) {
   //Error
},function(chunk){
    //progress
    console.log('BODY: '+chunk)
})