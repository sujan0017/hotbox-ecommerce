import { Link, NavLink, useNavigate } from "react-router";
import { navMenu } from "../constant/navMenu";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "./Button";
import { logOut } from "../redux/auth/authSlicer";
import Container from "./Container";
import { FaCartArrowDown } from "react-icons/fa";
import {
  AUTH_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_CART_ROUTE,
  PRODUCT_ROUTE,
} from "../constant/route";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = user ? true : false;

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem("authToken");
    navigate(`${HOME_ROUTE}`);
  };

  return (
    <section className="shadow-xl">
      <Container>
        <header className="flex items-center justify-between py-5 ">
          <div className="flex items-center justify-center gap-5">
            <span
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="block sm:hidden cursor-pointer "
            >
              <RiMenu2Line className="text-2xl" />
            </span>
            <Logo />
          </div>

          {/* laptop header */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-5">
              {navMenu.map((menu) => (
                <NavLink
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                  to={menu.href}
                  key={menu.href}
                >
                  {menu.title}
                </NavLink>
              ))}
            </div>
          </div>

          {/* mobile header */}
          {isNavOpen && (
            <div className="bg-white border opacity-95 border-slate-200 shadow rounded absolute top-17 py-3">
              <div className="flex flex-col  gap-1 min-w-50">
                {navMenu.map((menu) => (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-red-300 w-full py-1 px-2 rounded" : "full py-1 px-2 rounded"
                    }
                    to={menu.href}
                    key={menu.href}
                  >
                    {menu.title}
                  </NavLink>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-5">
            <div className="relative">
              <Link
                to={`/${PRODUCT_ROUTE}/${PRODUCT_CART_ROUTE}`}
                className="text-2xl cursor-pointer hover:text-red-600"
              >
                <FaCartArrowDown />

                {product.length > 0 && (
                  <div className="w-4 h-4 p-2 font-semibold text-xs flex justify-center items-center bg-red-200 rounded-full absolute bottom-5 left-4">
                    {product.length}
                  </div>
                )}
              </Link>
            </div>
            <span>|</span>
            {isLogin ? (
              <span onClick={handleLogOut}>
                <PrimaryButton title={"LogOut"} />
              </span>
            ) : (
              <PrimaryButton
                title={"Log In"}
                href={`/${AUTH_ROUTE}/${LOGIN_ROUTE}`}
              />
            )}
          </div>
        </header>
      </Container>
    </section>
  );
};

export default Header;
