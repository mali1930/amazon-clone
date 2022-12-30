import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className=" mb-10">
      <div className="flex  items-center justify-center h-screen">
        <div className="bg-white max-w-[480px] w-[100%]   py-3 border-2 border-black p-3">
          <div className="flex justify-center">
            <img
              src="https://www.bing.com/th?id=OIP.YdkQGmhB9c2Sr84FeDD9egHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
              alt="logo"
              className="max-w-[200px]  "
            />
          </div>
          <div className="md:px-4 px-2">
            <h1 className="md:text-xl text-md mb-4 ">Sign Up</h1>
            <label for="email" className="text-xl">
              Email:
            </label>
            <input
              type="email"
              placeholder=" Email"
              className="max-w-[800px] mb-4 w-[100%] border-2 py-2 rounded-md border-black mt-2 px-2"
            />
            <label for="email" className="text-xl">
              Password:
            </label>
            <input
              type="password"
              placeholder=" Password"
              className="max-w-[800px] mb-4 w-[100%] border-2 py-2 rounded-md border-black mt-2 px-2"
            />
            <label for="email" className="text-xl">
              Re-Password:
            </label>
            <input
              type="password"
              placeholder=" Password"
              className="max-w-[800px] mb-4 w-[100%] border-2 py-2 rounded-md border-black mt-2 px-2"
            />
            <input
              type="submit"
              value="Sign in"
              className="text-center bg-yellow-600 max-w-full w-[100%] mt-4 py-3 rounded-lg"
            />
            <p className="mt-3 mb-3 text-md text-gray-500">
              By continuing you agree to amazon conditions of the use and
              privacy notice.
            </p>
          </div>
          <div className="text-center mt-4 mb-2 px-4">
            <h1>Already have an Account?</h1>
            <Link to="/login">
              <button className="mt-4 bg-gray-300 max-w-full w-[100%] py-2">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
