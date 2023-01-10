import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#131921]  ">
      <div className="flex md:flex-row lg:flex-row xl:flex-row  justify-center gap-32  flex-col px-16 items-center text-gray-300">
        <div className="flex flex-col space-y-5 text-xl text-start mt-10 mb-10">
          <Link to="/">Home</Link>
          <Link to="/">contact</Link>
          <Link to="/">About</Link>
          <Link to="/">Location</Link>
        </div>
        <div className="flex flex-col space-y-5 text-xl text-start mt-10 mb-10">
          <Link to="/">Home</Link>
          <Link to="/">contact</Link>
          <Link to="/">About</Link>
          <Link to="/">Location</Link>
        </div>
        <div className="flex flex-col space-y-5 text-xl text-start mt-10 mb-10">
          <Link to="/">Home</Link>
          <Link to="/">contact</Link>
          <Link to="/">About</Link>
          <Link to="/">Location</Link>
        </div>
        <div className="flex flex-col space-y-5 text-xl text-start mt-10 mb-10">
          <Link to="/">Home</Link>
          <Link to="/">contact</Link>
          <Link to="/">About</Link>
          <Link to="/">Location</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
