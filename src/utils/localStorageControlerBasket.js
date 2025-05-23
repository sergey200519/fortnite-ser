const productIsBasket = (basket, productId) => {
    const product = basket.find(item => item.productId == productId)
    return product
}

export const incrementProductInBasket = (productId) => {
    const oldBasket = JSON.parse(localStorage.getItem("basket"))
    const newBasket = oldBasket
    newBasket.forEach(product => {
        if (product.productId == productId) {
            product.count = product.count + 1
        }
    });
    localStorage.setItem("basket", JSON.stringify(newBasket))
}

export const decrementProductInBasket = (productId) => {
    const oldBasket = JSON.parse(localStorage.getItem("basket"))
    const newBasket = oldBasket
    newBasket.forEach(product => {
        if (product.productId == productId) {
            product.count = product.count - 1
        }
    });
    localStorage.setItem("basket", JSON.stringify(newBasket))
}

export const saveProductToLocalStorage = (productId, price) => {
    const oldBasket = JSON.parse(localStorage.getItem("basket"))
    if (oldBasket == null) {
        localStorage.setItem("basket", JSON.stringify(
            [
                {
                    productId: productId,
                    price: price,
                    count: 1
                }
            ]
        ))
    } else if (productIsBasket(oldBasket, productId)) {
        incrementProductInBasket(productId)
    } else {
        const newBasket = oldBasket
        newBasket.push(
            {
                productId: productId,
                price: price,
                count: 1
            }
        )
        localStorage.setItem("basket", JSON.stringify(newBasket))
    }
}

export const getProductsFromLocalStorage = () => JSON.parse(localStorage.getItem("basket")) || []

export const removeProductFromLocalStorage = (productId) => {
    
    const oldBasket = JSON.parse(localStorage.getItem("basket"))
    const newBasket = oldBasket.filter((item) => item.productId != productId)
    localStorage.setItem("basket", JSON.stringify(newBasket))
}

export const clearBasketLocalStorage = () => {
    localStorage.removeItem("basket")
}
