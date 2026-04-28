import { NavLink } from "react-router";
import { navMenu } from "../constant/navMenu";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "./Button";
import { logOut } from "../redux/auth/authSlicer";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isLogin = user ? true : false;

  const handleLogOut = () => {
    console.log("user logged out");
    dispatch(logOut());
  };

  return (
    <header className="flex items-center justify-between px-10 py-5 shadow-xl">
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

        {isLogin && (
          <div className="flex items-center justify-center gap-5">
            <span>|</span>
            <span onClick={handleLogOut}>
              <PrimaryButton  title={"LogOut"} />
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
