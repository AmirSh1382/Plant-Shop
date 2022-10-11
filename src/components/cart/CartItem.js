import React from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Functions
import { productQuantityCount } from "../../helper/functions";

const CartItem = ({ coverPhoto, name, quantity, price, slug, id }) => {
  const dispatch = useDispatch();

  const cartProcuts = useSelector((state) => state.cartState.products);

  return (
    <div className="mb-3">
      <div className="flex flex-col sm:flex-row gap-2 max-w-[280px] sm:max-w-full border
        border-primary rounded-md overflow-hidden sm:[&>*]:grow pb-3 sm:pb-0 mx-auto">
        <img src={coverPhoto.url} className="sm:max-w-[160px]" alt={slug} />

        <div className="flex flex-col justify-center items-center gap-y-2">
          <span>{name}</span>
          <span className="text-primary">{price} تومان</span>
        </div>

        <div className="flex items-center justify-center">
          {quantity}
        </div>

        <div className="flex items-center justify-center gap-x-1">
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: id })}
            className="bg-primary rounded text-white transition hover:bg-primaryHover w-7 h-8"
          >
            <i className="bi bi-plus flex items-center justify-center text-xl"></i>
          </button>

          {productQuantityCount(cartProcuts, id) > 1 ? (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: id })}
              className="bg-primary rounded text-white transition hover:bg-primaryHover w-7 h-8"
            >
              <i className="bi bi-dash flex items-center justify-center text-xl"></i>
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: id })}
              className="bg-primary rounded text-white transition hover:bg-primaryHover w-7 h-8"
            >
              <i className="bi bi-trash flex items-center justify-center"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;