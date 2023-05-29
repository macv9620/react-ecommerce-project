import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout"
import { OrderList } from "../../Components/OrdersList"
import { useAppContext } from "../../Context/ContextAppProvider";

function MyOrders() {
  const {orders} = useAppContext()
  return (
    <Layout>
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
