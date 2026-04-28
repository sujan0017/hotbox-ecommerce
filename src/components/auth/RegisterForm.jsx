import { useState } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constant/regex";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/authAction";
import Spinner from ".././Spinner";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const onHandleSubmit = (data) => {
    dispatch(registerUser(data));
  };
  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className=" flex flex-col gap-3 px-5 py-10"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Full Name </label>
        <input
          {...register("name", {
            required: "Full Name is required.",
          })}
          className="border p-1 shadow border-slate-300 rounded"
          type="text"
        />

        <p className="text-red-500 text-sm -mt-1">{errors.fullName?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: "Email address is required.",
            pattern: {
              value: EMAIL_REGEX,
              message: "Please enter a valid email address.",
            },
          })}
          className="border p-1 shadow border-slate-300 rounded"
          type="text"
        />

        <p className="text-red-500 text-sm -mt-1">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <div className="w-full relative">
          <input
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters.",
              },
              validate: {
                hasUpperCase: (value) =>
                  PASSWORD_REGEX.upper.test(value) ||
                  "Password must include at least one uppercase letter.",
                hasLowerCase: (value) =>
                  PASSWORD_REGEX.lower.test(value) ||
                  "Password must include at least one lowercase letter.",
                hasNumber: (value) =>
                  PASSWORD_REGEX.number.test(value) ||
                  "Password must include at least one number.",
              },
            })}
            className="border p-1 w-full shadow border-slate-300 rounded"
            type={showPassword ? "text" : "password"}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute bottom-2 right-3 cursor-pointer text-slate-500 hover:text-slate-900 transition ease-in-out"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>

        <p className="text-red-500 text-sm -mt-1">{errors.password?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password absolute ">Confirm Password</label>
        <div className="w-full relative">
          <input
            {...register("confirmPassword", {
              required: "Confirm Password is required.",
              validate: (value) =>
                value === password || "Password do not match",
            })}
            className="border p-1 w-full shadow border-slate-300 rounded"
            type={showConfirmPassword ? "text" : "password"}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute bottom-2 right-3 cursor-pointer text-slate-500 hover:text-slate-900 transition ease-in-out"
          >
            {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>

        <p className="text-red-500 text-sm -mt-1">
          {errors.confirmPassword?.message}
        </p>
      </div>
      {error && <p className="text-red-500 text-sm -mt-1">{error}</p>}

      <button className="bg-purple-500 text-white shadow-xl hover:bg-purple-600 py-1 rounded cursor-pointer mt-2 transition ease-in-out ">
        <span className="flex justify-center items-center gap-2">
          Register
          {loading && <Spinner />}
        </span>
      </button>
      <Link to="/auth/login" className="text-center mt-2">
        Already have an account,{" "}
        <span className="text-blue-500 cursor-pointer hover:underline">
          login
        </span>
      </Link>
    </form>
  );
};

export default SignUp;
