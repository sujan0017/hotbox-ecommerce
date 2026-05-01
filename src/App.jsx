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

const App = () => {
  const { user } = useSelector((state) => state.auth);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route element={<AuthLayout user={user} />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/product">
            <Route index element={<ProductList />} />
            <Route path=":id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>

        <Route path="auth" element={<UnAuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<PageNoFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
