import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await axios.post(
        "http://localhost:4001/user/login",
        userInfo
      );
      console.log(res.data);

      if (res.data) {
        toast.success("Logged in Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(() => {
          navigate("/"); // Redirect to the homepage or desired route
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-[#181C14] dark:text-white">
          <button
            className="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6">Email</div>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="outline-none bg-slate-200 w-full mt-1 dark:bg-secondaryDark py-2 rounded-md px-2"
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}

            <div className="mt-6">Password</div>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="outline-none bg-slate-200 w-full mt-1 py-2 dark:bg-secondaryDark rounded-md px-2"
            />
            {errors.password && (
              <span className="text-sm text-red-600">
                {errors.password.message}
              </span>
            )}

            <div className="mt-6 flex justify-between">
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 duration-200 text-white px-3 font-bold rounded-md py-2 text-center"
              >
                Login
              </button>
              <p className="font-semibold">
                Not registered?{" "}
                <Link
                  to="signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
