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
        <Button variant="outlined" className="flex items-center bg-gray-300 gap-3">
        <a href="/login">Login</a> 
      </Button>
     {/* Button for sign up */}
      <Button  variant="outlined" className="flex items-center bg-gray-300 gap-3 px-8 py-3">
        <a href="/register">Sign Up</a> 
      </Button>
      <Button  variant="outlined" className="flex items-center  bg-gray-300 gap-3 px-8 py-3">
        <a href="/dashboard">My Account</a> 
      </Button>

      </div>
        <div className="md:hidden" onClick={handleClick}>
          <img src="./svgs/hamburgerMenu.svg" />
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
