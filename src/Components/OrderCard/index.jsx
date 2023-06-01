import { useAppContext } from "../../Context/ContextAppProvider";
import { Close } from "../Icons/Close";
import { QuantityCartHandler } from "../QuantityCartHandler";
import "./OrderCard.css";

// eslint-disable-next-line react/prop-types
const OrderCard = ({ product, from }) => {
  // eslint-disable-next-line react/prop-types
  const { product_name, price, image, id } = product;

  const { deleteIdFromCart } = useAppContext();
  return (
    <div className="flex justify-between items-center my-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <div>
        <p className="text-sm font-light">{product_name}</p>
        {from !== "MyOrder" && (
          <div className="custom-quantity-handler w-12 text-xs">
          <QuantityCartHandler product={product} />
        </div>
        )}
        </div>
      </div>

      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => deleteIdFromCart(id)}
      >
        <p className="text-lg font-medium">$ {price}</p>
        {from !== "MyOrder" && <Close />}
      </div>
    </div>
  );
};

export { OrderCard };
