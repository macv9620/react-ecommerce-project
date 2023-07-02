import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/ContextAppProvider";
import NoMatches from "../NoMatches/NoMatches";
import "./SideMyAccount.css";
import { OrderList } from "../OrdersList";
import { Close } from "../Icons/Close";
import { useAuthContext } from "../../Context/ContextAuthProvider";

const SideMyAccount = () => {
  const { orders, showMyAccountModal, setShowMyAccountModal, setShowCheckoutSide, setShowDetail, setShowBurger } = useAppContext();
  const { user } = useAuthContext();

  const isThereAOrder = () => {
    if (orders.length === 0) {
      return false;
    } else if (orders.length !== 0) {
      return true;
    }
  };

  const showModalAccount = () => {
    setShowMyAccountModal(true);
    setShowCheckoutSide(false)
    setShowDetail(false)
    setShowBurger(false)
  };

  const closeModalAccount = () => {
    setShowMyAccountModal(false);
  };

  return (
    <>
      <div className="my-account-tag" onClick={showModalAccount}>
        My Account
      </div>
      {user && (
            <aside 
            className={showMyAccountModal
            ? 'my-account-container flex flex-col fixed left-0 border border-black rounded bg-white'
            : 'hide-account-container flex flex-col fixed left-0 border border-black rounded bg-white'
            }
            >
            
            <div className="my-account-container__info">
              <div className="my-account-header flex justify-between p-6 w-full items-center">
              <div>

                <p className="font-medium text-xl">Your Account Info:</p>
              </div>
                <div className="cursor-pointer" onClick={closeModalAccount}>
                  <Close />
                </div>
              </div>
              <p>
                <strong>First Name: </strong>
                {user.first_name}
              </p>
              <p>
                <strong>Last Name: </strong>
                {user.last_name}
              </p>
              <p>
                <strong>Gender: </strong>
                {user.gender}
              </p>
              <p>
                <strong>Email: </strong>
                {user.email}
              </p>
              <p>
                <strong>Role: </strong>
                {user.role}
              </p>
            </div>
            <div className="my-account-container__orders">
              <p className="my-account-container__info--order">
                Order History:
              </p>
              <div className="order-history-container">
              {!isThereAOrder() && (
                <NoMatches
                  message={"No orders created yet ¡make your first!"}
                />
              )}
              {orders?.map((order, index) => (
                <Link
                 to={`/my-orders/${order.orderId}`} 
                 key={index}
                 onClick={closeModalAccount}
                 >
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
          </aside>
      )}

    </>
  );
};

export { SideMyAccount };
