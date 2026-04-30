import RegisterForm from "../../components/auth/RegisterForm";
function Register() {
  return (
    <div className="grid grid-cols-2 w-3/4 shadow-xl border border-slate-300 rounded mx-auto mt-10 ">
      <div className="primaryGradient p-5 text-center flex flex-col justify-center text-white gap-2">
        <h1 className="text-3xl font-semibold text-white ">Register</h1>
        <p className="text-sm font-light">
          Create an account to start managing your projects, track progress, and
          enjoy a seamless experience.
        </p>
      </div>

      <RegisterForm />
    </div>
  );
}

export default Register;
