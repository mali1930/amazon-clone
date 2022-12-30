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
    <div className="p-10 min-h-screen flex flex-col gap-10">
      {!cartItems.length ? (
        <h1>Cart page empty </h1>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} product={item} />)
      )}
    </div>
  );
};

export default Cart;
