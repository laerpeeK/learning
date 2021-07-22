function getSpaceData(origin_data) {
    var space = []
    space = Object.assign(origin_data['spaces'])
    return {
        space
    }
}

var result = getSpaceData(req)

/*
return {
    space_res: result.space,
}

 */