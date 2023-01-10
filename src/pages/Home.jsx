import React, { useEffect } from "react";
import Banner from "../Components/Banner";

import Side from "../Components/Side";

import ProductsList from "../Components/ProductsList";
import Products2 from "../Components/Products2";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" bg-slate-100 h-[100%]">
        <Banner />

        <ProductsList />
        <Side />
        <Products2 />
      </div>
    </>
  );
};

export default Home;
