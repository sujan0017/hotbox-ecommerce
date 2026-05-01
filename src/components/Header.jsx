import { Link, NavLink } from "react-router";
import { navMenu } from "../constant/navMenu";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "./Button";
import { logOut } from "../redux/auth/authSlicer";
import Container from "./Container";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const isLogin = user ? true : false;

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.clear("authToken");
  };

  return (
    <section className="shadow-xl">
      <Container>
        <header className="flex items-center justify-between py-5 ">
          <Logo />
          <div className="flex items-center gap-5">
            {navMenu
              .filter((menu) => menu.isLoginStatus === isLogin)
              .map((menu) => (
                <NavLink
                  className={({ isActive }) => (isActive ? "text-red-500" : "")}
                  to={menu.href}
                  key={menu.href}
                >
                  {menu.title}
                </NavLink>
              ))}
          </div>

          <div className="flex">
            <div className="mr-5 relative">
              <Link
                to={"/product/cart"}
                className="text-2xl cursor-pointer hover:text-red-600"
              >
                <FaCartArrowDown />

                {product.length != 0 && (
                  <div className="w-4 h-4 p-2 font-semibold text-xs flex justify-center items-center bg-red-200 rounded-full absolute bottom-5 left-4">
                    {product.length}
                  </div>
                )}
              </Link>
            </div>

            {isLogin && (
              <div className="flex items-center justify-center gap-5">
                <span>|</span>
                <span onClick={handleLogOut}>
                  <PrimaryButton title={"LogOut"} />
                </span>
              </div>
            )}
          </div>
        </header>
      </Container>
    </section>
  );
};

export default Header;
