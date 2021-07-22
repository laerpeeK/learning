function priceChange(spaces, quantity, price, spaceIndex, productIndex, project_price) {
    var space = spaces[spaceIndex]
    var product = spaces[spaceIndex]['_products'][productIndex]
    project_price -= space['空间总折后价']
    space['空间总折后价'] -= product['total_price']
    space['产品数量'] -= product['quantity']
    product['quantity'] = quantity
    if(typeof product['custom_price'] === 'undefined' || product['custom_price']) {
        product['custom_price'] = price
    }
    product['total_price'] = quantity * price
    space['空间总折后价'] += product['total_price']
    space['产品数量'] += product['quantity']
    project_price += space['空间总折后价']
    return {
        spaces,
        project_price
    }
}

var result = priceChange(space_req, current_quantity, current_price, selected_space, selected_product, project_price)
/*
return {
    space_res: result['spaces'],
    project_price: result['project_price']
}

 */