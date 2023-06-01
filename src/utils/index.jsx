const totalCartPrice = (cartProducts)=> {
    
    const acumPrice = cartProducts.reduce((acum, product)=> acum + product.price*product.productQuantity,0)

    return acumPrice
}

export { totalCartPrice }