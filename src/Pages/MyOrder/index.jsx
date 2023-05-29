import { Layout } from "../../Components/Layout";
import { useAppContext } from "../../Context/ContextAppProvider";
import { OrderCard } from "../../Components/OrderCard";
import './MyOrder.css'
import { Link, useParams } from "react-router-dom";
import { Back } from "../../Components/Icons/Back";

function MyOrder() {
  const {orders} = useAppContext()

  const {id} = useParams()

  console.log(orders)
  const orderToShow = orders[id - 1]
  return (
    <Layout>
      <div className="flex flex-col items-center text-3xl font-bold">
      <div className="flex items-center">
    <Link to={'/my-orders'}>
      <span
      className="cursor-pointer"
      ><Back /></span>
    </Link>
      <h2 className="px-4"
      >My Order id: #{id}</h2>
    </div>
        <div className="scroll-format overflow-y-scroll p-4 h-80 my-6">
          {orderToShow?.products.map((item, index) => {
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
              <span className="font-medium text-2xl">${orderToShow?.totalPrice}</span>
            </p>

          </div>


      </div>
    </Layout>
  );
}

export { MyOrder };
