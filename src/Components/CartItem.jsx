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
    <div className="flex items-center flex-wrap justify-between">
      <div className="flex items-center">
        <img src={product.image} alt="product" className="w-20" />
        <div className="text-start max-w-sm space-y-4 mt-3 ml-5">
          <h1 className="mt-2 mb-2 text-2xl truncate  font-bold">
            {product.title}
          </h1>
          <p className="text-xl font-medium">${product.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          <button
            onClick={decrementAmountHandler}
            className="bg-red-600 text-white rounded-md  px-4 py-3"
          >
            -
          </button>
          <p className="bg-gray-600 text-white rounded-md  px-4 py-3">
            {product.amount}
          </p>
          <button
            onClick={incrementAmountHandler}
            className="bg-blue-600 text-white  rounded-md  px-4 py-3"
          >
            +
          </button>
        </div>
        <button
          onClick={removeFromCartHandler}
          className="bg-yellow-600 rounded-md  px-4 py-3"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
