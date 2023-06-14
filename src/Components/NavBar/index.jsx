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
  const activeStyle = "underline underline-offset-4 font-medium";
  const {
    cartItems,
    openSideCheckoutMenu,
    clearSearchInput,
    renderLoadingSpinner,
    showLogoutModal,
    setShowLogoutModal,
    showModalMessage
  } = useAppContext();
  const { token, user } = useAuthContext();
  const [searchTypedValue, setSearchTypedValue] = useState("");

  const userIsAdmin = ()=>{
    if(user?.role === 'ADMIN'){
      return true
    } else {
      return false
    }
  }
  return (
    <>

      {renderLoadingSpinner && <HashLoaderModal />}
      {showLogoutModal && <LogOut />}
      {showModalMessage && <ModalMessage />}
      {token && <SideMyAccount />}

      <nav className="nav-bar flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-sm font-light bg-white">
        <ul className="flex items-center gap-2" onClick={clearSearchInput}>
        
          <li className="font-semibold text-lg">
            <NavLink to="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9284/9284815.png"
                className="w-6 h-6 mx-4"
              />
            </NavLink>
          </li>

          {categoriesLinks.map((category, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={category.to}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  {category.text}
                </NavLink>
              </li>
            );
          })}
          
        </ul>

        <div>
          <SearchNavBar
            searchTypedValue={searchTypedValue}
            setSearchTypedValue={setSearchTypedValue}
          />
        </div>

        <ul className="flex items-center gap-2">

          {user?.first_name && (
            <li className="text-black/60">Hi {user.first_name}</li>
          )}

          {!token && (<li>
            <NavLink
              to="/log-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Log In
            </NavLink>
          </li>)}

          {!token && (<li>
            <NavLink
              to="/sign-up"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign Up
            </NavLink>
          </li>)}

          {(token && userIsAdmin())&& (<li>
            <NavLink
              to="/admin-products"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className="flex items-center">
                <Lock />
                Products
              </div>
            </NavLink>
          </li>)}

          {token && (<li
            onClick={() => setShowLogoutModal(true)}
            className="cursor-pointer"
          >
            Log Out
          </li>)}

          <li
            className="flex items-center cursor-pointer relative"
            onClick={openSideCheckoutMenu}
          >
            <div className="absolute">
              <Cart />
            </div>
            <div className="cart-counter absolute left-3 bottom-0 text-xs">
              {cartItems.length}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { NavBar };
