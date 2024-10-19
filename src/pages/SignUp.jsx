import React, { useEffect, useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "../FirebaseConfig.js";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(<VscEye />);
  const [inputType, setInputType] = useState("password");

  const ToggleEyeBtn = () => {
    setIsOpen(!isOpen);
    isOpen ? setIcon(<VscEye />) : setIcon(<VscEyeClosed />);
    isOpen ? setInputType("password") : setInputType("text");
  };

  // react hook form===================

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUp = (data) => {
    const { email, password } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Account created successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate("/dashboard");
      }
    });
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-10 text-center text-5xl font-bold   text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSignUp)}>
            <div>
              <label
                htmlFor="email"
                className="block text-md font-semibold text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-3">
                <label
                  htmlFor="password"
                  className="block text-md font-semibold text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <div className="relative">
                  <input
                    {...register("password", { required: true })}
                    placeholder="Password"
                    id="password"
                    name="password"
                    type={inputType}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6 "
                  />
                  <span
                    onClick={() => ToggleEyeBtn()}
                    className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                  >
                    {icon}
                  </span>
                </div>
                <div>
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 mt-3"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      )
    </>
  );
};

export default SignUp;
