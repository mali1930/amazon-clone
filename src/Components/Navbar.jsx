import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <div className="flex  bg-[#131921] fixed top-0 left-0 right-0   z-50 py-3 w-[100%]  px-12  items-center  justify-between ">
      <div className="md:w-48 w-40 flex items-center invert cursor-pointer">
        <img src={logo} alt="logo" onClick={() => nav("/")} />
      </div>

      <div className="max-w-6xl   flex items-center">
        <input
          type="text"
          className="w-[790px] py-2 rounded-md px-5"
          placeholder="search.."
        />
      </div>
      <div className="flex items-center  gap-10 text-white text-lg">
        <div className="text-center">
          <div>hello</div>
          <span>
            <Link to="/login">Sign in</Link>
          </span>
        </div>
        <div className="text-center">
          <div>return</div>
          <span>
            <Link to="/login">orders</Link>
          </span>
        </div>
        <div className="text-center">
          <div>hello</div>
          <span>
            <Link to="/cart">cart</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
