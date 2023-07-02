import { NavLink } from "react-router-dom";
import { useAppContext } from "../../Context/ContextAppProvider";
import { Cart } from "../Icons/Cart";
import { SearchNavBar } from "../SearchNavBar";
import { useState } from "react";
import "./NavBar.css";
import { Lock } from "../Icons/Lock";
import { HashLoaderModal } from "../LoadingSpinners/HashLoaderModal.jsx";
import { LogOut } from "../LogOut/LogOut";
import { SideMyAccount } from "../SideMyAccount/SideMyAccount";
import { useAuthContext } from "../../Context/ContextAuthProvider";
import { ModalMessage } from "../ModalMessage/ModalMessage";
import { Burger } from "../Icons/Burger";
import { ProductDetail } from "../ProductDetail";

const categoriesLinks = [
  { to: "/", text: "All" },
  { to: "/categories/Computers", text: "Computers" },
  { to: "/categories/Electronics", text: "Electronics" },
  { to: "/categories/Grocery", text: "Grocery" },
  { to: "/categories/Toys", text: "Toys" },
  { to: "/categories/Shoes", text: "Shoes" },
  { to: "/categories/Others", text: "Others" },
];




const NavBar = () => {

  const {
    cartItems,
    openSideCheckoutMenu,
    clearSearchInput,
    renderLoadingSpinner,
    showLogoutModal,
    setShowLogoutModal,
    showModalMessage,
    setShowCheckoutSide,
    setShowDetail,
    setShowMyAccountModal,
    showBurger, 
    setShowBurger
  } = useAppContext();
  const { token, user } = useAuthContext();
  const [searchTypedValue, setSearchTypedValue] = useState("");

  const closeModal = ()=> {
    setShowCheckoutSide(false)
    setShowDetail(false)
    setShowMyAccountModal(false)
    setShowBurger(false)
  }

  const userIsAdmin = ()=>{
    if(user?.role === 'ADMIN'){
      return true
    } else {
      return false
    }
  }

  const handleShowBurger = ()=> {
    setShowBurger(!showBurger)
    setShowCheckoutSide(false)
    setShowDetail(false)
    setShowMyAccountModal(false)
  }
  return (
    <>

      {renderLoadingSpinner && <HashLoaderModal />}
      {showLogoutModal && <LogOut />}
      {showModalMessage && <ModalMessage />}
      {token && <SideMyAccount />}
      <ProductDetail />
      <nav className="nav-bar">
        <div
         className="show-hide-burger"
         onClick={handleShowBurger}
         >
          <Burger />
        </div>
        <ul 
        className={
          `navbar-categories navbar-show-links ${
            showBurger
            ?null
            :"hide-on-mobile"
            }`
          } 
        onClick={clearSearchInput}>
        
          <li className="font-semibold text-lg">
            <NavLink to="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9284/9284815.png"
                className="w-6 h-6 mx-4"
                onClick={closeModal}
              />
            </NavLink>
          </li>

          {categoriesLinks.map((category, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={category.to}
                  className={({ isActive }) =>
                    isActive ? 'is-active' : undefined
                  }
                onClick={closeModal}
                >
                  {category.text}
                </NavLink>
              </li>
            );
          })}


          {!token && (<li className="hide-on-desktop highlight">
            <NavLink
              to="/log-in"
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={closeModal}
            >
              Log In
            </NavLink>
          </li>)}

          {!token && (<li className="hide-on-desktop highlight">
            <NavLink
              to="/sign-up"
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={closeModal}
            >
              Sign Up
            </NavLink>
          </li>)}

          {(token && userIsAdmin())&& (<li className="hide-on-desktop highlight">
            <NavLink
              to="/admin-products"
              className={({ isActive }) => (isActive ? 'is-active--products' : undefined)}
              onClick={closeModal}
            >
              <div className="flex items-center">
                <Lock />
              Products
              </div>
            </NavLink>
          </li>)}

          {token && (<li
            onClick={() => {
              setShowLogoutModal(true)
              closeModal()
              }}
            className="cursor-pointer hide-on-desktop highlight"
          >
            Log Out
          </li>)}

        </ul>

        <div>
          <SearchNavBar
            searchTypedValue={searchTypedValue}
            setSearchTypedValue={setSearchTypedValue}
            closeModal={closeModal}
          />
        </div>

        <ul className="navbar-actions">

          {user?.first_name && (
            <p className="hide-on-mobile-rigth text-black/60">Hi {user.first_name}</p>
          )}

          {!token && (<li className="hide-on-mobile-rigth">
            <NavLink
              to="/log-in"
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={closeModal}
            >
              Log In
            </NavLink>
          </li>)}

          {!token && (<li className="hide-on-mobile-rigth">
            <NavLink
              to="/sign-up"
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={closeModal}
            >
              Sign Up
            </NavLink>
          </li>)}

          {(token && userIsAdmin())&& (<li className="hide-on-mobile-rigth">
            <NavLink
              to="/admin-products"
              className={({ isActive }) => (isActive ? 'is-active--products' : undefined)}
              onClick={closeModal}
            >
              <div className="flex items-center">
                <Lock />
              Products
              </div>
            </NavLink>
          </li>)}

          {token && (<li
            onClick={() => {
              setShowLogoutModal(true)
              closeModal()
              }}
            className="cursor-pointer hide-on-mobile-rigth"
          >
            Log Out
          </li>)}
        </ul>

          <div
            className="flex items-center cursor-pointer relative"
            onClick={()=> {
              openSideCheckoutMenu()
              setShowDetail(false)
              setShowMyAccountModal(false)
              setShowBurger(false)
              }
            }
          >
            <div className="absolute">
              <Cart />
            </div>
            <div className="cart-counter absolute left-3 bottom-0 text-xs">
              {cartItems.length}
            </div>
          </div>
      </nav>
    </>
  );
};

export { NavBar };
