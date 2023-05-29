import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/ContextAppProvider";
import { totalCartPrice } from "../../utils";
import { Close } from "../Icons/Close";
import { OrderCard } from "../OrderCard";
import "./CheoutSideMenu.css";

const CheckoutSideMenu = () => {
  const { closeSideCheckoutMenu, showCheckoutSide, cartItems, setOrders, orders, setCartItems, openSideCheckoutMenu } =
    useAppContext();

  const lastOrderId = orders.length + 1
  
  const orderToAdd = ()=> {
    const currentDate = new Date()
    console.log(currentDate)

    const orderSummaryInfo = {
      orderId: lastOrderId,
      date: {
        orderDate: `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`,
        orderTime: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
      },
      products: cartItems,
      productsQ: cartItems.length,
      totalPrice: totalCartPrice(cartItems),
    }
    setOrders([...orders, orderSummaryInfo])
    setCartItems([])
    openSideCheckoutMenu()
  }

  if (showCheckoutSide) {
    return (
      <aside className="checkout-side-menu flex flex-col fixed right-0 border border-black rounded bg-white">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">My Order</h2>
          <div className="cursor-pointer" onClick={closeSideCheckoutMenu}>
            <Close />
          </div>
        </div>
        <div className="px-6 flex-1">
          {cartItems.map((item, index) => {
            return (
              <OrderCard
                key={index}
                title={item.title}
                price={item.price}
                image={item.images[0]}
                id={item.id}
              />
            );
          })}
        </div>
          <div className="px-6 mb-6">
            <p className="flex justify-between items-center mb-2">
              <span className="font-light">Total: </span>
              <span className="font-medium text-2xl">$ {totalCartPrice(cartItems)}</span>
            </p>
            <Link to={`/my-orders/${lastOrderId}`}>
            <button
            className="w-full bg-black py-3 text-white rounded-lg"
            onClick={orderToAdd}
            >Checkout</button>
            </Link>
          </div>
      </aside>
    );
  }
};

export { CheckoutSideMenu };
