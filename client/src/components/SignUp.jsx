import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div
      id="my_modal_3"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="dark:bg-primaryDark modal-box dark:text-white w-[80%] md:w-[40%] border-[1px] shadow-md p-3 md:p-6 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link
            to="/"
            className="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h3 className="font-bold text-lg">Sign Up</h3>

          {/* Fullname Input */}
          <div className="mt-6">Name</div>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("fullname", { required: "Name is required" })}
            className="outline-none bg-slate-200 w-full mt-1 dark:bg-secondaryDark py-2 rounded-md px-2"
          />
          {errors.fullname && (
            <p className="text-red-500">{errors.fullname.message}</p>
          )}

          {/* Email Input */}
          <div className="mt-6">Email</div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="outline-none bg-slate-200 w-full mt-1 dark:bg-secondaryDark py-2 rounded-md px-2"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Password Input */}
          <div className="mt-6">Password</div>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="outline-none bg-slate-200 w-full mt-1 py-2 dark:bg-secondaryDark rounded-md px-2"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {/* Submit Button and Login Link */}
          <div className="mt-6 flex justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 duration-200 text-white px-3 font-bold rounded-md py-2 text-center"
            >
              Sign Up
            </button>
            <p className="font-semibold">
              Have an account?{" "}
              <Link to="/" className="underline text-blue-500 cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
