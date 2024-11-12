import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const SignUp = () => {
  return (
    <>
      <div
        id="my_modal_3"
        className="flex justify-center items-center min-h-screen"
      >
        <div className=" dark:bg-primaryDark modal-box dark:text-white w-[80%] md:w-[40%] border-[1px] shadow-md p-3 md:p-6 rounded-2xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg ">Sign Up </h3>
          <div className="mt-6">Name</div>
          <input
            type="text"
            placeholder="Enter your full name"
            className="outline-none bg-slate-200 w-full mt-1 dark:bg-secondaryDark py-2 rounded-md px-2"
          />
          <div className="mt-6">Email</div>
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none bg-slate-200 w-full mt-1 dark:bg-secondaryDark py-2 rounded-md px-2"
          />
          <div className="mt-6">Password</div>
          <input
            type="password"
            placeholder="Enter your password"
            className="outline-none bg-slate-200 w-full mt-1 py-2  dark:bg-secondaryDark rounded-md px-2"
          />
          <div className="mt-6 flex justify-between">
            <button className="bg-pink-500 hover:bg-pink-600 duration-200 text-white  px-3 font-bold rounded-md py-2 text-center">
              Sign Up
            </button>
            <p className="font-semibold">
              Have account?{" "}
              <Link
                to = "/"
                className="underline text-blue-500 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
