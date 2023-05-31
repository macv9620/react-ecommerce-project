import { useAppContext } from "../../Context/ContextAppProvider";
import { Add } from "../Icons/Add";
import { Check } from "../Icons/Check";
import "./Card.css";

const Card = ({ category, title, image, price, product, id }) => {
  const { openDetail, addToCart, cartItems } = useAppContext();
  
  const isItemInCart = cartItems.filter((item)=>(
    item.id === id
  )).length > 0


  return (
    <div
      onClick={() => openDetail(product)}
      className="custom-card bg-white cursor-pointer w-56 h-60 rounded-lg"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
        {isItemInCart && (
          <button className="custom-add absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 text-sm cursor-default bg-black">
            <Check />
          </button>
        )}

        {!isItemInCart && (
          <button
            className="custom-add absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 text-sm"
            onClick={(event) => addToCart(event, product)}
          >
            <Add />
          </button>
        )}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">{`$ ${price}`}</span>
      </p>
    </div>
  );
};

export { Card };
