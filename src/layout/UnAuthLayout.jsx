import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const UnAuthLayout = () => {
  const { user } = useSelector((state) => state.auth);
  return <>{user ? <Navigate to={"/"} /> : <Outlet />}</>;
};

export default UnAuthLayout;
