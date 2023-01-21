import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import ReactStars from "react-rating-stars-component";


export default function Product({ product }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product.id,
        amount: 1,
      })
    );
  };

  return (
    <Fade right>
    
      <div className=" bg-white mt-10 mb-10 flex flex-col  justify-center object-contain  p-12 w-[260px]   md:w-[350px] md:h-[600px]     rounded-md  ">
        <Link to={`/product/${product?.id}`}>
          <img
            src={product?.image}
            alt="product"
            className=" md:w-[240px] md:h-[240px] object-contain h-[200px] w-[170px]  "
          />
          <div className="text-start max-w-sm space-y-4 mt-3">
            <h1 className="mt-2 mb-2 text-2xl truncate  font-bold">
              {product?.title}
            </h1>
            <p className="truncate">{product?.description}</p>
            <ReactStars
              edit={false}
              count={5}
              size={20}
              value={product.rating.rate}
            />
            <p>${product?.price}</p>
          </div>
        </Link>
        <button
          onClick={addToCartHandler}
          className="bg-yellow-600 py-3 mt-6 rounded-md  w-full"
        >
          Add to cart
        </button>
      </div>
    </Fade>
  );
}
