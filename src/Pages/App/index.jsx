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
import { ContextAppProvider } from "../../Context/ContextAppProvider";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/categories/:category", element: <Home /> },
    { path: "/search/:searchText", element: <Home /> },
    { path: "my-account", element: <MyAccount /> },
    { path: "my-orders", element: <MyOrders /> },
    { path: "my-orders/:id", element: <MyOrder /> },
    { path: "sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ContextAppProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ContextAppProvider>
  );
};

export { App };
