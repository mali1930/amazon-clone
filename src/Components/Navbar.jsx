import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const nav = useNavigate();
  return (
    <div className="flex  bg-[#131921] sticky top-0 left-0 z-50 py-5 w-[100%]  px-12  items-center  justify-between ">
      <div className=" flex items-center  invert cursor-pointer">
        <img
          src={logo}
          alt="logo"
          className="w-[90px] lg:w-[110px] flex items-center"
          onClick={() => nav("/")}
        />
      </div>

      <div className=" flex items-center  ">
        <input
          type="text"
          className="py-2  hidden md:block  rounded-md px-5"
          placeholder="search.."
        />
      </div>
      <div className="md:flex md:flex-row hidden items-center   gap-10 text-white text-md">
        <div className="text-center">
          <div>hello</div>
          <span>
            <Link to="/login">Sign in</Link>
          </span>
        </div>
        <div className="text-center">
          <div>return</div>
          <span>
            <Link to="/history">orders</Link>
          </span>
        </div>
        <div className="text-center">
          
          <span>
            <Link to="/cart">cart</Link>
          </span>
        </div>
      </div>
      <div className="lg:hidden  md:hidden flex flex-row items-center gap-5">
        {open ? (
          <AiOutlineClose
            size={40}
            onClick={handleOpen}
            className="text-white cursor-pointer "
          />
        ) : (
          <AiOutlineMenu
            size={36}
            onClick={handleOpen}
            className="text-white cursor-pointer "
          />
        )}
      </div>
      {open && (
        <div className="md:hidden lg:hidden flex flex-col bg-[#131921] items-center space-y-16 h-[100vh] w-80 fixed top-0 right-0 text-white  ">
          <AiOutlineClose
            size={40}
            onClick={handleOpen}
            className="text-white absolute left-7 mt-5 cursor-pointer "
          />
          <div className="text-center ">
            <div className="mb-4 text-xl">hello,</div>
            <span className="font-bold text-2xl">
              <Link onClick={() => setOpen(false)} to="/login">
                Sign in
              </Link>
            </span>
          </div>
          <div className="text-center">
            <div className="mb-4 text-xl">return</div>
            <span className="font-bold text-2xl">
              <Link onClick={() => setOpen(false)} to="/login">
                orders
              </Link>
            </span>
          </div>
          <div className="text-center">
            <span className="font-bold text-2xl">
              <Link to="/cart" onClick={() => setOpen(false)}>
                cart
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
