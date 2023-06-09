import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/ContextAppProvider";
import NoMatches from "../NoMatches/NoMatches";
import "./SideMyAccount.css";
import { OrderList } from "../OrdersList";
import { Close } from "../Icons/Close";

const SideMyAccount = () => {
  const { orders, showMyAccountModal, setShowMyAccountModal } = useAppContext();

  const isThereAOrder = () => {
    if (orders.length === 0) {
      return false;
    } else if (orders.length !== 0) {
      return true;
    }
  };

  const showModalAccount = () => {
    setShowMyAccountModal(true);
  };

  const closeModalAccount = ()=> {
    setShowMyAccountModal(false);
  }

  return (
    <>
      <div className="my-account-tag" onClick={showModalAccount}>
        My Account
      </div>
      {showMyAccountModal && (
        <div className="my-account-background">
          <div className="my-account-container">
            <div className="my-account-container__info">
              <div className="my-account-container__close">
                <p className="my-account-container__info--title">
                  Your Account Info:
                </p>
                <div onClick={closeModalAccount} >
                <Close />
                </div>
              </div>
              <p><strong>First Name:</strong> Mateo</p>
              <p><strong>Last Name:</strong> Vasco</p>
              <p><strong>Gender:</strong> M</p>
              <p><strong>Email:</strong> mateo.vasco@mail.com</p>
              <p><strong>Role:</strong> Customer</p>
            </div>
            <div className="my-account-container__orders">

            <p className="my-account-container__info--order">Order History:</p>

              {!isThereAOrder() && (
                <NoMatches
                  message={"No orders created yet ¡make your first!"}
                />
              )}
              {orders?.map((order, index) => (
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
      )}
    </>
  );
};

export { SideMyAccount };
