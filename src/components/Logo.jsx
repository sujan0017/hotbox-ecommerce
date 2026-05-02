import { Link } from "react-router";
import logoImg from "./../assets/logoImg.png";
import { HOME_ROUTE } from "../constant/route";

function Logo() {
  return (
    <Link to={`${HOME_ROUTE}`} className="w-28 cursor-pointer">
      <img src={logoImg} alt="Hotbox logo" />
    </Link>
  );
}

export default Logo;
