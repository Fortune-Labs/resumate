import { Button } from "@material-tailwind/react";
// import React from 'react';
// import { useState, useEffect } from 'react';
import axios from "axios";

import loginp from "../../assets/svg/login.svg";
import google from "../../assets/svg/google.svg";
import apple from "../../assets/svg/apple.svg";

// Default axios vars- CSRF tokens gets sent with requests we make to django
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

// Client instance with base URL - We only type in the Django URL once
// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000"
// });

const login = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={loginp} alt="login image" />
      </div>

      <div className="md:w-1/3 max-w-sm">
        <label className="mr-1 text-2xl font-normal">Welcome Back</label>
        <div className=" grid grid-cols-2 gap-3 items-center justify-centermd:text-left">
          <div className="flex items-center">
            <button type="button" className=" flex items-center justify-center mt-4 space-x-2
               bg-gray-500 hover:bg-blue-700 px-2 py-2 text-white uppercase rounded text-xs">
              <img src={google} className="h-5 w-5" alt="G" />
              <span>Continue with Google</span>
            </button>
          </div>
          <div className="flex items-center">
            <button
              type="button"className=" flex items-stretch mt-4 space-x-2 
              bg-gray-500 hover:bg-blue-700 px-3 py-2 text-white uppercase rounded text-xs ">
                <img src={apple} className=" h-5 w-5" alt="A" />
              <span> Continue with Apple</span>
            </button>
          </div>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <label htmlFor="">Email</label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <label htmlFor="">Password</label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-gray-500 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Sign Up Here
          </a>
        </div>
      </div>
      <div className="md:w-1/3 max-w-sm">
        <img src={loginp} alt="login image" />
      </div>
    </section>
  );
};

export default login;
