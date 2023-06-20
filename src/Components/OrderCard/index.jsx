import { useAppContext } from "../../Context/ContextAppProvider";
import { Close } from "../Icons/Close";
import { QuantityCartHandler } from "../QuantityCartHandler";
import "./OrderCard.css";

// eslint-disable-next-line react/prop-types
const OrderCard = ({ product, from }) => {
  // eslint-disable-next-line react/prop-types
  const { product_name, price, image, id, productQuantity } = product;

  const { deleteIdFromCart } = useAppContext();
  return (
    <div className="flex justify-between items-center my-2 w-full">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <div>
          <p className="text-sm font-light w-28">{product_name}</p>
          {from === "MyOrder"  && (
            <p className="text-xs font-light">
            Quantity: <span className="font-bold">{productQuantity}</span>
          </p>
          )}

          {from !== "MyOrder" && (
            <div className="custom-quantity-handler w-12 text-xs">
              <QuantityCartHandler product={product} />
            </div>
          )}
        </div>
      </div>

      <div
        className="flex items-center gap-2"

      >
        <p className="text-xl font-medium">$ {price*productQuantity}</p>
        {from !== "MyOrder" && (
          <div
          className="cursor-pointer"
            onClick={() => deleteIdFromCart(id)}
          >
            <Close />
          </div>
        )}
      </div>
    </div>
  );
};

export { OrderCard };
