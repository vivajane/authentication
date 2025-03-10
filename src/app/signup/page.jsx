"use client";
import React from "react";
import Link from "next/link";
import Button from "../components/Button";
import signUp from "@/config/signup";
import { useState } from "react";

const SignUp = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setDetails((details) => ({
      ...details,
      [name]: value,
    }));
    console.log(details);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(details);
    try {
      const res = await signUp(details.email, details.password);
      return res;
    } catch (error) {
        console.error("Error signing in:", error);
    }
  };
  return (
    <div className="flex justify-between items-center h-screen">
      <div className="h-full hidden md:block md:w-1/2">
        <img
          className="h-full object-cover"
          src="https://images.pexels.com/photos/4340139/pexels-photo-4340139.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="kk"
        />
      </div>
      <form
        onSubmit={onSubmitHandler}
        className="md:px-24 px-4 md:w-1/2 mx-auto md:mx-0 justify-center md:text-xs lg:text-sm xl:text-base items-center"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold py-3">SIGN UP</h1>
          <p className="text-[#E5E7EB]">
            Let's start your wonderful journey with you
          </p>
        </div>
        <div className="my-2">
          <label className="font-normal py-3 text-base" htmlFor="email">
            Email Address
          </label>
          <input
            onChange={onChange}
            value={details.email}
            className="border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]"
            type="email"
            name="email"
            id="email"
            placeholder="  Email address"
          />
        </div>
        <div className="py-2">
          <label className="font-normal text-base" htmlFor="pw">
            Password
          </label>
          <input
            onChange={onChange}
            value={details.password}
            className="border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]"
            type="text"
            name="password"
            id="pw"
            placeholder="   Password"
          />
          <p className="text-[#E5E7EB] text-sm font-normal">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
        </div>
        <div className="py-2">
          <label className="font-normal text-base" htmlFor="pw">
            Confirm Password
          </label>
          <input
            onChange={onChange}
            value={details.confirmpassword}
            className="border-[1px] w-full py-1 rounded mt-1 border-[#E5E7EB]"
            type="text"
            name="confirmpassword"
            id="cpw"
            placeholder="   Password"
          />
        </div>

        <div className="pt-4 pb-1">
          <Button variant="largelogin" size="lg">
            Sign Up
          </Button>
        </div>
        <div>
          <p className="py-2  text-base font-normal text-right">
            Already have an account?{" "}
            <Link
              className="text-emerald-900 border-b border-emerald-900"
              href="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
