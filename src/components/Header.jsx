import { NavLink } from "react-router";
import { navMenu } from "../constant/navMenu";
import Logo from "./Logo";

const Header = () => {
  const isLogin = true;

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
      </div>
    </header>
  );
};

export default Header;
