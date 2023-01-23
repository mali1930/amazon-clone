import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetProductsIdQuery } from "../features/products/productsSlice";

import { AiOutlineArrowLeft } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

const ProductId = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductsIdQuery(id);

  if (isLoading)
    return (
      <h1 className="flex items-center justify-center text-7xl text-bold h-screen">
        Loading....
      </h1>
    );
  return (
    <>
      <div className="px-20 mt-32">
        <Link to="/">
          <h1 className="text-3xl font-bold">
            <AiOutlineArrowLeft />
          </h1>
        </Link>
      </div>
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
          <div className="leading-8 md:text-lg text-md">
            {data?.description}
          </div>
          <div className="md:text-lg text-md">${data?.price}</div>
          <ReactStars
            edit={false}
            count={5}
            size={20}
            value={data?.rating.rate}
          />
        </div>
      </div>
    </>
  );
};

export default ProductId;
