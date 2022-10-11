import React from "react";

// React-router-dom
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Functions
import { isInCart } from "../../helper/functions";
import { productQuantityCount } from "../../helper/functions";

const Product = ({ coverPhoto, name, nameInEnglish, price, slug, id }) => {
  const dispatch = useDispatch();

  const cartProcuts = useSelector(state => state.cartState.products);

  return (
    <div>
      <div
        className="max-w-[330px] mx-auto rounded-lg overflow-hidden
                    border border-primary"
      >
        <img src={coverPhoto.url} alt={slug} className="w-full" />
        <div className="p-4">
          <div className="mb-3">{name}</div>
          <div className="text-end mb-3">{nameInEnglish}</div>
          <div className="text-center text-primary mb-4">{price} تومان</div>
          <div className="flex items-center justify-between">
            {isInCart(cartProcuts, id) ? (
              <div className="flex">
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: id })}
                  className="bg-primary rounded text-white transition hover:bg-primaryHover w-7 h-8"
                >
                  <i className="bi bi-plus flex items-center justify-center text-xl"></i>
                </button>

                <span className="flex items-end justify-center w-7">
                  {productQuantityCount(cartProcuts, id)}
                </span>

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
            ) : (
              <button
                className="bg-primary rounded text-white transition hover:bg-primaryHover px-2 py-1"
                onClick={() =>
                  dispatch({
                    type: "ADD_PRODUCT",
                    payload: {coverPhoto, name, nameInEnglish, price, slug, id}
                  })
                }
              >
                افزودن به سبد خرید
              </button>
            )}
            <Link to={`/shop/${slug}`} className="text-primary">
              بیشتر ...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;