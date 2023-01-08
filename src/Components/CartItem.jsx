import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import {
  decrementProductAmount,
  incrementProductAmount,
  removeFromCart,
} from "../features/cart/cartSlice";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(product.id));
  };

  const incrementAmountHandler = () => {
    dispatch(incrementProductAmount(product.id));
  };

  const decrementAmountHandler = () => {
    dispatch(decrementProductAmount(product.id));
  };

  return (
    <div className="flex items-center   p-3 w-[100%] max-w-full flex-wrap justify-between">
      <div className="flex py-4 items-center ">
        <img src={product.image} alt="product" className="w-20" />
        <div className="text-start max-w-sm space-y-4 mt-3 ml-5">
          <ReactStars
            edit={false}
            count={5}
            size={12}
            value={product?.rating.rate}
          />
          <p className="text-sm ">${product.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          <button
            onClick={decrementAmountHandler}
            className=" rounded-md  px-4 py-3"
          >
            -
          </button>
          <p className=" rounded-md  px-4 py-3">{product.amount}</p>
          <button
            onClick={incrementAmountHandler}
            className="  rounded-md  px-4 py-3"
          >
            +
          </button>
        </div>
        <button
          onClick={removeFromCartHandler}
          className="bg-red-600 text-white rounded-md  px-1 py-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
