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

  return (
    <div className="flex md:flex-row flex-wrap gap-12 px-6">
      <div className=" max-w-full mt-20 w-[65%]">
        {!cartItems.length ? (
          <h1>Cart page empty </h1>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        )}
      </div>
      <div className="mt-28 w-[30%] space-y-3 max-w-full ">
        <h1>Checkout</h1>
        <button>Total:$</button>
      </div>
    </div>
  );
};

export default Cart;
