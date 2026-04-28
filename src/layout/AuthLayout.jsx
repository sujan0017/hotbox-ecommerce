import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  const { user } = useSelector((state) => state.auth);
  return <>{user ? <Outlet /> : <Navigate to={"/auth/login"} />}</>;
};

export default AuthLayout;
