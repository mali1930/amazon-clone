import React from "react";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Fade from "react-reveal/Fade";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useGetProductsQuery } from "../features/products/productsSlice";
import Loading from "./Loading";

export default function ProductsList() {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  if (isLoading) return <Loading />;
  if (error) return <h1>Something went wrong!</h1>;

  return (
    <div className="flex   flex-wrap items-center justify-center gap-16 md:px-16 px-5">
      {products?.slice(11, 20).map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
}
