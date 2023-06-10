import { useRoutes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { LogIn } from "../LogIn";
import { MyOrder } from "../MyOrder";
import { NotFound } from "../NotFound";
import { SignUp } from "../SignUp/index";
import "./App.css";
import { NavBar } from "../../Components/NavBar";
import { ContextAppProvider } from "../../Context/ContextAppProvider";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { ProductForm } from "../AdminProducts";
import { AuthNoLoggedinRedirect, AuthLoggedinRedirect, ContextAuthProvider } from "../../Context/ContextAuthProvider";


const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/categories/:category", element: <Home /> },
    { path: "/search/:searchText", element: <Home /> },

    //Protected when logged in
    { path: "log-in",
    element: (
      <AuthLoggedinRedirect>
        <LogIn />
    </AuthLoggedinRedirect>
    ) },
    
    //Protected when no logged in
    { path: "my-orders/:id", 
    element: (
      <AuthNoLoggedinRedirect>
        <MyOrder />
      </AuthNoLoggedinRedirect>) 
    },

    { path: "sign-up", 
    element: (
      <AuthLoggedinRedirect>
        <SignUp />
    </AuthLoggedinRedirect>
    ) },

    //Protected when no logged in
    { path: "admin-products", 
    element: (
      <AuthNoLoggedinRedirect>
        <ProductForm />
      </AuthNoLoggedinRedirect>) 
    },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
    <ContextAuthProvider>
        <ContextAppProvider>
          <AppRoutes />
          <NavBar />
          <CheckoutSideMenu />
        </ContextAppProvider>
      </ContextAuthProvider>
    </BrowserRouter>
  );
};

export { App };
