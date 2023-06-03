import { useRoutes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { LogIn } from "../LogIn";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignUp } from "../SignUp/index";
import "./App.css";
import { NavBar } from "../../Components/NavBar";
import { ContextAppProvider } from "../../Context/ContextAppProvider";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/categories/:category", element: <Home /> },
    { path: "/search/:searchText", element: <Home /> },
    { path: "log-in", element: <LogIn /> },
    { path: "my-orders", element: <MyOrders /> },
    { path: "my-orders/:id", element: <MyOrder /> },
    { path: "sign-up", element: <SignUp /> },
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
