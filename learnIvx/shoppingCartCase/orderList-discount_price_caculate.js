function discount_price_caculate(origin_price, discount) {
    if(isNaN(discount)) {
        return -1
    }
    var result = discount === 0? origin_price:origin_price * discount * 0.1

    return result
}
/*
return {discount_price: discount_price_caculate(origin_price, discount)}

 */