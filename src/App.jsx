import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import MainLayout from "./layout/MainLayout";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Products from "./pages/Products";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />

        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
        </Route>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
