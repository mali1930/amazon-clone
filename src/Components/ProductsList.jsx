import React from "react";
import Product from "./Product";
import { useGetProductsQuery } from "../features/products/productsSlice";
import Loading from "./Loading";


export default function ProductsList() {
  const { data: products = [], isLoading } = useGetProductsQuery();
  if (isLoading) return <Loading />;

  return (
  
      <div className="flex mb-20  flex-wrap items-center justify-center gap-16 md:px-16 px-5">
        {products?.slice(1, 10).map((item) => (
       
            <Product key={item.id} product={item} />
      
        ))}
      </div>
  
  );
}
