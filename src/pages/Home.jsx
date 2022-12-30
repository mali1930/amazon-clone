import React from "react";
import Banner from "../Components/Banner";

import Side from "../Components/Side";

import ProductsList from "../Components/ProductsList";
import Products2 from "../Components/Products2";
const Home = () => {
  return (
    <>
      <Banner />
      <div className=" bg-slate-100 h-auto w-full">
        <ProductsList />
        <Side />
        <Products2 />
      </div>
    </>
  );
};

export default Home;
