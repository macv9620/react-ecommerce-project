import { Bag } from "../Icons/Bag";
import Clock from "../Icons/Clock";
import { Date } from "../Icons/Date";
import { Forward } from "../Icons/Forward";

// eslint-disable-next-line react/prop-types
const OrderList = ({ date, totalProducts, totalPrice, orderId, time, from }) => {
  return (
    <div className="flex justify-between my-2 border border-black p-4 mx-2 rounded-lg items-center">
      <div className="flex flex-col items-center">
        <span className="text-xs font-bold">Order Id: #{orderId}</span>
        <span className="flex text-xs items-center gap-1">
        <Date /> 
         {date}</span>
        <span className="flex font-light text-xs items-center gap-1">
        <Clock />
        {time}</span>
      </div>
      <div className="flex items-center">
      <div className="flex flex-col items-center">
        <span className="flex items-center text-md font-medium w-20">$ {totalPrice}</span>
        <span className="flex text-xs font-light items-center w-full">
        <Bag />
         {totalProducts} items</span>
      </div>
      {(from !== 'my-account') && (
        <span className="px-2">
          <Forward />
        </span>
      )}
      </div>
    </div>
  );
};

export { OrderList };
