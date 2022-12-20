import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductId from "./pages/ProductId";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "swiper/css/bundle";

const App = () => {
  return (
    <div className="w-[100%] bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductId />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
