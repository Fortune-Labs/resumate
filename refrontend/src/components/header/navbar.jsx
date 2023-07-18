// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
// import { LockClosedIcon,} from "@heroicons/react/24/outline";
// import {logo,lock, hamburgerMenu, close} from '../assets
import logo  from '../../assets/images/logos.png'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  
  return (
    <div className="fixed top-0 left-0 w-full h-[80px] bg-white border-b px-2 sm:px-6 lg:px-8">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logo} alt="Fortunelabs" className="h-[25px]" />
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li> <a href="/">Home</a></li>
            <li><a href="/cv">CV</a></li>
            <li><a href="/job">Job</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="hidden md:flex gap-3">
    {/* Button for sign up */}
        <Button variant="outlined" className="flex items-center gap-3">
        <a href="/login">Login</a> 
      </Button>
     {/* Button for sign up */}
      <Button  variant="outlined" className="flex items-center gap-3 px-8 py-3">
        <a href="/register">Sign Up</a> 
      </Button>
      <Button  variant="outlined" className="flex items-center gap-3 px-8 py-3">
        <a href="/dashboard">My Account</a> 
      </Button>

        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img src="./svgs/hamburgerMenu.svg" />
        </div>
      </div>
      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 ">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
              <img src="./svgs/lock.svg" />
              Login
            </button>
            <button className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
