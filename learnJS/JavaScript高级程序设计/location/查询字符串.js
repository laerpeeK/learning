let getQueryStringArgs = function() {
    let qs = (location.search.length > 0 ? location.search.substring(1) : '')
    args = {}

    for(let item of qs.split('&').map(kv=> kv.split('='))) {
        let name = decodeURIComponent(item[0]),
            value = decodeURIComponent(item[1])
        if(name.length) {
            args[name] = value
        }
    }
    return args
}
