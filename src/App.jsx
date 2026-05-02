import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import UnAuthLayout from "./layout/UnAuthLayout";
import AuthLayout from "./layout/AuthLayout";
import { useSelector } from "react-redux";
import PageNoFound from "./pages/PageNoFound";
import ProductList from "./pages/product/ProductList";
import ProductDetail from "./pages/product/ProductDetail";
import Register from "./pages/auth/Register";
import Cart from "./pages/product/Cart";
import {
  ABOUT_ROUTE,
  AUTH_ROUTE,
  CHECKOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_CART_ROUTE,
  PRODUCT_ROUTE,
  REGISTER_ROUTE,
} from "./constant/route";
import Checkout from "./pages/product/CheckOut";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME_ROUTE} element={<MainLayout />}>
      {/* Public routes - anyone can see  */}
      <Route index element={<Home />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={CONTACT_ROUTE} element={<Contact />} />

      <Route path={PRODUCT_ROUTE}>
        <Route index element={<ProductList />} />
        <Route path=":id" element={<ProductDetail />} />
        <Route path={PRODUCT_CART_ROUTE} element={<Cart />} />
      </Route>

      {/* Protected routes - must be logged in */}
      <Route element={<AuthLayout />}>
        <Route
          path={`/${PRODUCT_ROUTE}/${CHECKOUT_ROUTE}`}
          element={<Checkout />}
        />
      </Route>

      {/* Auth routes - logged in users can't access */}
      <Route path={AUTH_ROUTE} element={<UnAuthLayout />}>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
      </Route>

      <Route path="*" element={<PageNoFound />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
