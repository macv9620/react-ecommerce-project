import { useRoutes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn/index";
import "./App.css";
import { NavBar } from "../../Components/NavBar";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "my-account", element: <MyAccount /> },
    { path: "my-order", element: <MyOrder /> },
    { path: "my-orders", element: <MyOrders /> },
    { path: "sign-in", element: <SignIn /> },
		{ path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  );
};

export { App };
