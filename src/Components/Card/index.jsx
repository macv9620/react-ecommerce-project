import { useAppContext } from "../../Context/ContextAppProvider";
import { Add } from "../Icons/Add";
import './Card.css'

const Card = ({ category, title, image, price, product }) => {
  const { 
    openDetail,
    addToCart,
   } = useAppContext();

  return (
    <div 
    onClick={()=> openDetail(product)}
    className="custom-card bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
        <button
          className="custom-add absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full bg-white m-2 text-sm"
          onClick={()=> addToCart(product)}
        >
            <Add />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">{`$ ${price}`}</span>
      </p>
    </div>
  );
};

export { Card };
