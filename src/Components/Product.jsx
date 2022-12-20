import React, { useEffect, useState } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

//import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex mb-20 mt-10 flex-wrap items-center justify-center gap-16 md:px-16 px-28">
    
      {products?.slice(0, 3).map((item) => (
        <Fade right>
          <div className=" bg-white flex flex-col justify-center   p-12 w-[270px] md:w-[430px] md:h-[560px]   object-contain   rounded-md  ">
            <Link to={`/product/${item.id}`} key={item.id}>
              <img
                src={item.image}
                alt="product-image"
                className=" w-[200px]  "
              />
              <div className="text-start max-w-sm space-y-4 mt-3">
                <h1 className="mt-2 mb-2 text-2xl truncate  font-bold">
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
        </Fade>
      ))}
    </div>
  );
};

export default Product;
