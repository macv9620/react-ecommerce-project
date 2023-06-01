import { useAppContext } from '../../Context/ContextAppProvider'
import './QuantityCartHandler.css'

// eslint-disable-next-line react/prop-types
const QuantityCartHandler = ({addToCart, product}) => {
  const {cartItems} = useAppContext()
  const productQuantity = cartItems.find((cartItem)=> cartItem.id === product.id).productQuantity
console.log(product)
  return (
    <>
    <div className="custom-add absolute top-0 right-0 w-14 h-6 m-2 text-sm cursor-default">
        <button
        onClick={(event) => addToCart(event, product)}
        >-</button>
        <span>{productQuantity}</span>
        <button
        onClick={(event) => addToCart(event, product)}
        >+</button>
    </div>
    </>
  )
}

export { QuantityCartHandler }