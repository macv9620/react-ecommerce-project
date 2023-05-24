import { Layout } from "../../Components/Layout";
import { useAppContext } from "../../Context/ContextAppProvider";
import { OrderCard } from "../../Components/OrderCard";
import './MyOrder.css'

function MyOrder() {
  const {orders} = useAppContext()
  console.log(orders)
  return (
    <Layout>
      <div className="flex flex-col items-center text-3xl font-bold">
        MyOrder
        <div className="scroll-format overflow-y-scroll p-4 h-80 my-6">
          {orders[orders.length - 1]?.products.map((item, index) => {
            return (
              <OrderCard
                key={index}
                title={item.title}
                price={item.price}
                image={item.images[0]}
                id={item.id}
                from={'MyOrder'}
              />
            );
          })}
        </div>

        <div className="w-full px-6">
            <p className="flex justify-between items-center mb-2">
              <span className="font-light">Total: </span>
              <span className="font-medium text-2xl">{orders[orders.length - 1]?.totalPrice}</span>
            </p>

          </div>


      </div>
    </Layout>
  );
}

export { MyOrder };
