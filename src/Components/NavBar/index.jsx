import { NavLink } from "react-router-dom";
import { useAppContext } from "../../Context/ContextAppProvider";
import { Cart } from "../Icons/Cart";
import { SearchNavBar } from "../SearchNavBar";
import { useState } from "react";
import './NavBar.css'
import { Lock } from "../Icons/Lock";
import { HashLoaderModal } from "../LoadingSpinners/HashLoaderModal.jsx"
import { LogOut } from "../LogOut/LogOut";


const NavBar = () => {
  const activeStyle = "underline underline-offset-4 font-medium";
  const { cartItems, openSideCheckoutMenu, clearSearchInput, renderLoadingSpinner, showLogoutModal, setShowLogoutModal } = useAppContext();

  const [searchTypedValue, setSearchTypedValue] = useState("");

  return (
    <>
    {renderLoadingSpinner && <HashLoaderModal />}
    {showLogoutModal && <LogOut />}
    <nav className="nav-bar flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-2"
      onClick={clearSearchInput}
      >
        <li className="font-semibold text-lg">
          <NavLink to="/">
            <img src="https://cdn-icons-png.flaticon.com/512/9284/9284815.png" className="w-6 h-6 mx-4" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/Computers"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Computers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/Electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/Grocery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Grocery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/Toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/Shoes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/Others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <div>
        <SearchNavBar
        searchTypedValue={searchTypedValue} 
        setSearchTypedValue={setSearchTypedValue}
         />
      </div>

      <ul className="flex items-center gap-2">
        <li className="text-black/60">@macv9620</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/log-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-up"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign Up
          </NavLink>
        </li>
        <li onClick={()=> setShowLogoutModal(true)} className="cursor-pointer">
            Log Out
        </li>
        <li>
          <NavLink
            to="/admin-products"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
          <div className="flex items-center">
            <Lock />
            Products
          </div>
        </NavLink>
        </li>
        <li className="flex items-center cursor-pointer relative"
        onClick={openSideCheckoutMenu}
        >
          <div className="absolute"><Cart /></div>
          <div className="cart-counter absolute left-3 bottom-0 text-xs">{cartItems.length}</div>
        </li>
      </ul>
    </nav>
    </>
  );
};

export { NavBar };
