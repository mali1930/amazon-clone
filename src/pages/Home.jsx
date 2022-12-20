import React from "react";
import Banner from "../Components/Banner";
import Product from "../Components/Product";
import Side from "../Components/Side";

import Footer from "../Components/Footer";
import Products2 from "../Components/Products2";
const Home = () => {
  return (
    <div className="bg-gray-100 w-[100%] ">
      <Banner />
      <Product />
      <Side />

      <Products2 />
    </div>
  );
};

export default Home;
