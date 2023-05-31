import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout"
import { OrderList } from "../../Components/OrdersList"
import { useAppContext } from "../../Context/ContextAppProvider";
import NoMatches from "../../Components/NoMatches/NoMatches";

function MyOrders() {
  const {orders} = useAppContext()

  const isThereAOrder = ()=> {
    if(orders.length === 0){
      return false
    } else if(orders.length !== 0){
      return true
    }
  }


  return (
    <Layout>
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
    </Layout>
  )
}

export { MyOrders };
