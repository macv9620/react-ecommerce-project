import { NavLink } from "react-router-dom";
import { useAppContext } from "../../Context/ContextAppProvider";
import { Cart } from "../Icons/Cart";
import { SearchNavBar } from "../SearchNavBar";
import { useState } from "react";
import './NavBar.css'


const NavBar = () => {
  const activeStyle = "underline underline-offset-4";
  const { cartItems, openSideCheckoutMenu, clearSearchInput } = useAppContext();

  const [searchTypedValue, setSearchTypedValue] = useState("");

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-sm font-light bg-white opacity-95">
      <ul className="flex items-center gap-2"
      onClick={clearSearchInput}
      >
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
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
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
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
  );
};

export { NavBar };
