import React from "react";
import Banner from "../Components/Banner";
import Product from "../Components/Product";
import Side from "../Components/Side";

import Products2 from "../Components/Products2";
const Home = () => {
  return (
    <>
      <Banner />
      <div className=" bg-slate-100 h-auto">
        <Product />
        <Side />

        <Products2 />
      </div>
    </>
  );
};

export default Home;
