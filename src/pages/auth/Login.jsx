import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <div className="grid grid-cols-2 w-3/4 shadow-xl border border-slate-300 rounded mx-auto mt-10 ">
      <div className="primaryGradient p-5 text-center flex flex-col justify-center text-white gap-2">
        <h1 className="text-3xl font-semibold text-white ">Login</h1>
        <p className="text-sm font-light">
          Welcome back! Log in to your account to continue exploring your
          dashboard, manage your profile, and access all features securely.
        </p>
      </div>

      <LoginForm />
    </div>
  );
}

export default Login;
