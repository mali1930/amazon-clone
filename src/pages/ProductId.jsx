import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductId = () => {
  const [products, setProducts] = useState([]);
  const [add, setAdd] = useState(false);
  const nav = useNavigate();
  const { id } = useParams();

  async function fetchProduct() {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProducts(data);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const addCart = () => {
    setAdd(true);
  };
  return (
    <div className="mt-20 mb-20 flex flex-wrap justify-center gap-16 items-center px-10">
      <div>
        <img src={products.image} alt="product-image" className="h-[600px] mt-10" />
      </div>
      <div className="space-y-5 max-w-3xl mt-10">
        <div className="text-3xl font-bold">{products.title}</div>
        <div className="leading-8 md:text-lg text-md">
          {products.description}
        </div>
        <div className="md:text-lg text-md">${products.price}</div>
        {/* <div>{products.rating.rate}</div> */}
        <button
          onClick={() => (add ? nav("/cart") : add)}
          className="bg-yellow-600 py-2 md:px-28 px-12"
        >
          {add ? "Checkout" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductId;
