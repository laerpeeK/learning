function getProjectPrice(origin_data) {
    var result = 0
    for(var i in origin_data) {
        result += origin_data[i]['空间总折后价']
    }
    return result
}

/*
return {
    project_price_res : getProjectPrice(req)
}

 */