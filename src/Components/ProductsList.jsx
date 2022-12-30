import React from "react";
import Product from "./Product";
import { useGetProductsQuery } from "../features/products/productsSlice";

export default function ProductsList() {
  const { data: products = [], isLoading } = useGetProductsQuery();
  if (isLoading)
    return (
      <h1 className="text-7xl flex justify-center items-center h-screen">
        Loading...
      </h1>
    );

  return (
    <div className="flex mb-20  flex-wrap items-center justify-center gap-16 md:px-16 px-5">
      {products?.slice(0, 3).map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
}
