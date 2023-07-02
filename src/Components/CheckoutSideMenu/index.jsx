import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/ContextAppProvider";
import { totalCartPrice } from "../../utils";
import { Close } from "../Icons/Close";
import { OrderCard } from "../OrderCard";
import "./CheoutSideMenu.css";
import { useAuthContext } from "../../Context/ContextAuthProvider";
import NoMatches from "../NoMatches/NoMatches";
import { usePostOrder } from "../../services/usePostOrder";
import { useState } from "react";

const CheckoutSideMenu = () => {
  const[dataToPost, setDataToPost]=useState(null)
  const { closeSideCheckoutMenu, showCheckoutSide, cartItems, setCartItems, openSideCheckoutMenu } =
    useAppContext();

  const {token, user} = useAuthContext()

  const{postOrderResponse} = usePostOrder(dataToPost)
  
  const orderToAdd = ()=> {
    const currentDate = new Date()

    //Prefijo 0 para números menores a 10
    const getHours = () => {
      if(Number(currentDate.getHours()) < 10){
        return `0${currentDate.getHours()}`
      } else {
        return `${currentDate.getHours()}`
      }
    }
    const getMinutes = () => {
      if(Number(currentDate.getMinutes()) < 10){
        return `0${currentDate.getMinutes()}`
      } else {
        return `${currentDate.getMinutes()}`
      }
    }
    const getDate = ()=>{
      if(Number(currentDate.getDate()) < 10){
        return `0${currentDate.getDate()}`
      } else {
        return `${currentDate.getDate()}`
      }
    }
    const getMonth = ()=>{
      if(Number(currentDate.getMonth()+1) < 10){
        return `0${currentDate.getMonth()+1}`
      } else {
        return `${currentDate.getMonth()+1}`
      }
    }

    const orderTime = `${getHours()}:${getMinutes()}`
    const orderSummaryInfo = {
      email: user.email,
      orderId: '',
      date: {
        orderDate: `${getDate()}-${getMonth()}-${currentDate.getFullYear()}`,
        orderTime: orderTime,
      },
      products: cartItems,
      productsQ: cartItems.length,
      totalPrice: totalCartPrice(cartItems),
    }
    setDataToPost(orderSummaryInfo)
    //setOrders([...orders, orderSummaryInfo])
    setCartItems([])
    openSideCheckoutMenu()
  }

  const isCartItemsEmpty = ()=>{
    if(cartItems.length === 0){
      return true
    }
  }



    return (
      <aside className={showCheckoutSide
      ? "checkout-side-menu fixed right-0 border border-black rounded bg-white"
      : "hide-checkout fixed right-0 border border-black rounded bg-white"
      }>

        <div className="cart-header flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">Cart</h2>
          <div className="cursor-pointer" onClick={closeSideCheckoutMenu}>
            <Close />
          </div>
        </div>

        {isCartItemsEmpty() && (
          <NoMatches message={"No items added yet ¡let's add!"}/>
        )}
        {!isCartItemsEmpty() && (
          <div className="cart-item px-6 flex-1">
          {cartItems.map((item, index) => {
            return (
              <OrderCard
                key={index}
                product={item}
              />
            );
          })}
        </div>
        )}

          <div className="cart-footer px-6">
            <p className="flex justify-between items-center my-0">
              <span className="font-light">Total: </span>
              <span className="font-medium text-2xl">$ {totalCartPrice(cartItems)}</span>
            </p>

            {(token && !isCartItemsEmpty()) && (
              <Link to={`/`}>
                <button
                className="w-full bg-black py-2 text-white rounded-lg"
                onClick={orderToAdd}>
                  Confirm order
                </button>
            </Link>
            )}

            {(token && isCartItemsEmpty()) && (
              <Link to='./'>
                <button
                className="w-full bg-black py-2 text-white rounded-lg"
                onClick={closeSideCheckoutMenu}>
                  See products
                </button>
            </Link>
            )}

            {(!token && isCartItemsEmpty()) && (
              <Link to={`./`}>
                <button
                className="w-full bg-black py-2 text-white rounded-lg"
                onClick={closeSideCheckoutMenu}>
                  See products
                </button>
            </Link>
            )}

            {(!token && !isCartItemsEmpty()) && (
              <Link to={`./log-in`}>
                <button
                className="w-full bg-black py-2 text-white rounded-lg"
                onClick={closeSideCheckoutMenu}>
                  Log in to confirm order
                </button>
            </Link>
            )}

            

          </div>
      </aside>
    );
  
};

export { CheckoutSideMenu };
