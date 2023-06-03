import { useAppContext } from "../../Context/ContextAppProvider";
import { Cart } from "../Icons/Cart";
import { QuantityCartHandler } from "../QuantityCartHandler";
import "./Card.css";

// eslint-disable-next-line react/prop-types
const Card = ({ category, product_name, image, price, product, id }) => {
  const { openDetail, addToCart, cartItems } = useAppContext();
  
  const isItemInCart = cartItems.filter((item)=>(
    item.id === id
  )).length > 0


  return (
    <div
      onClick={() => openDetail(product)}
      className="flex flex-col custom-card bg-white cursor-pointer w-56 h-70 rounded-lg"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={product_name}
        />
        {isItemInCart && (
          <div className="custom-add absolute top-0 right-0 w-14 h-6 m-2 text-sm cursor-default">
          <QuantityCartHandler
          product={product}
           />
           </div>
        )}

        {!isItemInCart && (
          <button
            className="custom-add absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 text-sm"
            onClick={(event) => addToCart(event, product)}
          >
            <Cart />
          </button>
        )}
      </figure>
      <p className="flex justify-between px-3 items-center">
        <span className="text-sm font-light">{product_name}</span>
        <span className="text-lg font-medium w-14">{`$ ${price}`}</span>
      </p>
    </div>
  );
};

export { Card };
