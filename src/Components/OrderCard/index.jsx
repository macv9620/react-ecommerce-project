import { useAppContext } from "../../Context/ContextAppProvider";
import { Close } from "../Icons/Close";

// eslint-disable-next-line react/prop-types
const OrderCard = ({ title, price, image, id, from }) => {
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
        <p className="text-sm font-light">{title}</p>
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
