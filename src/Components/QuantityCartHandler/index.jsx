import { useAppContext } from '../../Context/ContextAppProvider'

// eslint-disable-next-line react/prop-types
const QuantityCartHandler = ({product, hasToCloseDetail}) => {
  const {cartItems, removeFromCart, addToCart} = useAppContext()
  // eslint-disable-next-line react/prop-types
  const productQuantity = cartItems.find((cartItem)=> cartItem.id === product.id).productQuantity
  return (
    <>

        <button
        onClick={(event) => removeFromCart(event, product, hasToCloseDetail)}
        >-</button>
        <span>{productQuantity}</span>
        <button
        onClick={(event) => addToCart(event, product, hasToCloseDetail)}
        >+</button>
    </>
  )
}

export { QuantityCartHandler }