import { useAppContext } from "../../Context/ContextAppProvider";
import { Close } from "../Icons/Close";
import { OrderCard } from "../OrderCard";
import "./CheoutSideMenu.css";

const CheckoutSideMenu = () => {
  const {
     closeSideCheckoutMenu,
     showCheckoutSide,
     cartItems,
     } = useAppContext();

  if(showCheckoutSide){
  return (
    <aside className="checkout-side-menu flex flex-col fixed right-0 border border-black rounded bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div className="cursor-pointer" onClick={closeSideCheckoutMenu}>
          <Close />
        </div>
      </div>
      <div className="px-6">
      {cartItems.map((item, index)=>{
        return(
          <OrderCard
          key={index}
          title={item.title}
          price={item.price}
          image={item.images[0]}
          />
        )
      })

      }
      </div>

    </aside>
  )
  }
};

export { CheckoutSideMenu };
