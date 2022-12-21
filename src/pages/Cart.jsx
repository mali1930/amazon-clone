import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const count = useSelector((s) => s.cart.value);
  return (
    <div className="mt-24 mb-20">
      <div>
        <h1 className="mt-20">Cart page empty { count }</h1>
       
      </div>
    </div>
  );
};

export default Cart;
