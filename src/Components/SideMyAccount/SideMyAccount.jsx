import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/ContextAppProvider";
import NoMatches from "../NoMatches/NoMatches";
import "./SideMyAccount.css";
import { OrderList } from "../OrdersList";

const SideMyAccount = () => {

  
  const {orders} = useAppContext()

  const isThereAOrder = ()=> {
    if(orders.length === 0){
      return false
    } else if(orders.length !== 0){
      return true
    }
  }


  return (
    <>
      <div className="my-account-tag">My Account</div>

      <div className="my-account-background">
        <div className="my-account-container">
          <div className="my-account-container__info">
            <p>Your Account Info</p>
            <p>First Name: Mateo</p>
            <p>Last Name: Vasco</p>
            <p>Gender: M</p>
            <p>Email: mateo.vasco@mail.com</p>
            <p>Role: Customer</p>
          </div>
          <div className="my-account-container__orders">

          {!isThereAOrder() && <NoMatches message={"No orders created yet ¡make your first!"}/>}
    {orders?.map((order, index)=>(
      <Link to={`/my-orders/${order.orderId}`} key={index}>
      <OrderList 
        date={order.date.orderDate}
        time={order.date.orderTime}
        totalProducts={order.productsQ}
        totalPrice={order.totalPrice}
        orderId={order.orderId}
      />
      </Link>

    ))}




          </div>
        </div>
      </div>
    </>
  );
};

export { SideMyAccount };
