import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Fade from "react-reveal/Fade";
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const Products2 = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Fade left>
      <div className="flex mb-20 mt-10 flex-wrap items-center justify-center gap-20 md:px-14 px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          navigation={true}
          centerInsufficientSlides
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products?.slice(4, 20).map((item) => (
            <SwiperSlide key={item.id}>
              <div className=" bg-white flex flex-col mb-28 justify-center object-contain  p-12  md:w-[330px] md:h-[660px]     rounded-md  ">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt="product-image"
                    className=" md:w-[300px] md:h-[340px] h-[250px] w-[200px]  "
                  />
                  <div className="text-start max-w-sm space-y-4 mt-3">
                    <h1 className="mt-2 mb-2 text-md truncate  font-bold">
                      {item.title}
                    </h1>
                    {/* {Array(rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>*</p>
                ))} */}
                    {/* <ReactStars
                edit={false}
                count={5}
                size={20}
                value={item.rating.rate }
              /> */}

                    <p>${item.price}</p>
                  </div>
                </Link>
                <button className="bg-yellow-600 py-3 mt-20 rounded-md  w-full">
                  Add to cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fade>
  );
};

export default Products2;
