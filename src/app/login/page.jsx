"use client";
import React from "react";
import Link from "next/link";
import Button from "../components/Button";
import login from "@/config/login";
// import Image from 'next/image'
import { useState } from "react";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState({
    email: "",
    password: "",
    rememberme: false,
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoggedIn((loggedIn) => ({
      ...loggedIn,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(loggedIn);

    setErrors((loggedIn) => ({
      ...loggedIn,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!loggedIn.email) {
      newErrors.email = "Email is required";
    }

    if (!loggedIn.password) {
      newErrors.password = "Password is required";
    } else if (loggedIn.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setAuthError("");
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await login(
        loggedIn.email,
        loggedIn.password,
        loggedIn.rememberme
      );
      if (!res || res.error) {
        setAuthError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setAuthError("Invalid email or password");
    }

    if (loggedIn.rememberme) {
      localStorage.setItem("rememberedicon", details.email);
    }
  };
  return (
    <div className="flex  items-center h-screen">
      <div className="h-full hidden md:block md:w-1/2">
        {/* <Image className='w-full' src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" alt="logo" width={1920} height={1080} layout='responsive' /> */}
        <img
          className="h-full object-cover"
          src="https://images.pexels.com/photos/4344878/pexels-photo-4344878.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="kk"
        />
      </div>
      <form
        onSubmit={onSubmitHandler}
        className="md:px-26 px-4 md:w-1/2 md:block mx-auto md:mx-0 md:text-xs lg:text-sm xl:text-base  justify-center items-center"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold py-3">LOG IN</h1>
          <p className="text-[#E5E7EB]">
            Welcome Back! Please enter your details
          </p>
        </div>
        <div className="my-2">
          <label className="font-normal py-3 text-base" htmlFor="email">
            Email Address
          </label>
          <input
            onChange={onChange}
            value={loggedIn.email}
            className="border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]"
            type="email"
            name="email"
            id="email"
            placeholder="   Email address"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="py-2">
          <label className="font-normal text-base" htmlFor="pw">
            Password
          </label>
          <input
            onChange={onChange}
            value={loggedIn.password}
            className="border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]"
            type="text"
            name="password"
            id="pw"
            placeholder="   Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
          <p className="text-[#E5E7EB] text-sm md:text-xs lg:text-sm  font-normal">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
        </div>
        <div className="flex py-2 justify-between">
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="remember" id="remember" />
            <p>Remember me</p>
          </div>
          <div>
            <Link href="/forgotpassword">Forgot Password?</Link>
          </div>
        </div>
        {authError && (
          <p className="text-red-500 text-sm text-center">{authError}</p>
        )}
        <div className="py-6">
          <Button variant="largelogin" size="lg">
            Sign In
          </Button>
        </div>
        <div>
          <p className="py-2  text-base font-normal text-right">
            Don&apos;t have an account?{" "}
            <Link
              className="text-emerald-900 border-b border-emerald-900"
              href="/signup"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
