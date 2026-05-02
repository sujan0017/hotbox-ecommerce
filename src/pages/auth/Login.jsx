import LoginForm from "../../components/auth/LoginForm";
import Container from "../../components/Container";

function Login() {
  return (
    <Container>
      <div className="grid sm:grid-cols-2  lg:w-3/4 xl:w-1/2 shadow-xl border border-slate-300 rounded mx-auto mt-10 ">
        <div className="primaryGradient rounded-l  text-center flex flex-col justify-center text-white gap-2 py-20 sm:py-0 px-10 sm:px-5">
          <h1 className="text-3xl font-semibold text-white ">Login</h1>
          <p className="text-sm font-light">
            Welcome back! Log in to your account to continue exploring your
            dashboard, manage your profile, and access all features securely.
          </p>
        </div>
        <LoginForm />
      </div>
    </Container>
  );
}

export default Login;
