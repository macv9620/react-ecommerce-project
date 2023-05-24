import { Close } from "../Icons/Close";

const OrderCard = ({title, price, image}) => {
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

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">$ {price}</p>
        <Close />
      </div>
    </div>
  );
};

export { OrderCard };
