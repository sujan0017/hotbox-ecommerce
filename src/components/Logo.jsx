import { Link } from "react-router";
import logoImg from "./../assets/logoImg.png";

function Logo() {
  return (
    <Link to={"/"} className="w-28 cursor-pointer">
      <img src={logoImg} alt="Hotbox logo" />
    </Link>
  );
}

export default Logo;
