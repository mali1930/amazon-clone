import { Link, useParams } from "react-router-dom";

import { useGetProductsIdQuery } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { useState } from "react";
const ProductId = () => {
  const [add, setAdd] = useState(false);
  const { id } = useParams();
  const { data, isLoading } = useGetProductsIdQuery(id);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: id,
        amount: 1,
      })
    );
  };

  if (isLoading)
    return (
      <h1 className="flex items-center justify-center text-7xl text-bold h-screen">
        Loading....
      </h1>
    );
  return (
    <div className="mt-20 mb-64 flex flex-wrap justify-center gap-16 items-center px-10">
      <div className="object-contain">
        <img
          src={data?.image}
          alt="product"
          className="h-[500px] w-[450px] mt-10"
        />
      </div>
      <div className="space-y-5 max-w-3xl mt-10">
        <div className="text-3xl font-bold">{data?.title}</div>
        <div className="leading-8 md:text-lg text-md">{data?.description}</div>
        <div className="md:text-lg text-md">${data?.price}</div>
        <ReactStars
          edit={false}
          count={5}
          size={20}
          value={data?.rating.rate}
        />
        <button
          onClick={addToCartHandler}
          className="bg-yellow-600 py-2 md:px-28 px-12"
        >
          <h1 onClick={() => setAdd(!add)}>
            {add ? "Checkout" : "Add to cart"}
          </h1>
        </button>
      </div>
    </div>
  );
};

export default ProductId;
