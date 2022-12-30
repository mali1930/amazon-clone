import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductId from "./pages/ProductId";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "swiper/css/bundle";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
   const cart = useSelector((state) => state.cart);
   useEffect(() => {
     localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductId />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
