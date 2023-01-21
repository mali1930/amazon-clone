import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { useGetProductsQuery } from "../features/products/productsSlice";

const Cart = () => {
  const { data: products = [] } = useGetProductsQuery();
  const items = useSelector((s) => s.cart.items);
  const cartItems = useMemo(() => {
    if (!products.length) return [];

    return Object.keys(items).map((id) => {
      const product = products.find((p) => p.id == id);

      return {
        ...product,
        amount: items[id],
      };
    });
  }, [items, products]);
  const total = useMemo(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.amount;
    })
    return total;

  }, [cartItems])

  return (
    <div className="flex md:flex-row bg-gray-100 flex-wrap justify-center gap-12 px-6">
      <div className=" max-w-full bg-white px-2 py-8 mt-20 mb-2 md:w-[64%] w-[100%] ">
        {!cartItems.length ? (
          <h1>Cart page empty </h1>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        )}
      </div>
      <div className="mt-20 w-[30%] md:h-[80vh] h-[22vh] p-2  mb-8  space-y-3 max-w-full ">
        <h1>Checkout</h1>
        <div>Total:${total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Cart;
