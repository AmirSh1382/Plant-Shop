import React, { useEffect } from "react";

// Components
import EmptyCart from "./EmptyCart";
import CheckOut from "./CheckOut";
import CartItem from "./CartItem";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { clearCartAction, checkoutAction } from "../../redux/cart/cartActions";

// React-router-dom
import { useNavigate } from "react-router-dom";

// React-toastify
import { toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const state = useSelector(state => state);
  const { userState, cartState, paginationState } = state;

  const { isLogedIn } = userState;
  const { allProducts } = paginationState;
  const { products, checkout, itemsCounter, total } = cartState;

  const clearCart = () => {
    dispatch(clearCartAction());
    toast.success("سبد خرید با موفقیت خالی شد.");
  };

  const checkOut = () => {
    if (isLogedIn) {
      dispatch(checkoutAction());
      toast.success("خرید شما با موفقیت انجام شد.");
    } else {
      toast.warn("ابتدا وارد اکانت خود شوید !");
      navigate("/form");
    }
  };

  useEffect(() => {
    !allProducts.length && navigate("/store");
  }, [allProducts, navigate]);

  if (!products.length && !checkout) return <EmptyCart />;

  if (!products.length && checkout) return <CheckOut />;

  return (
    <div className="max-w-6xl w-full mt-24 mb-5 px-5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6">
        <div className="rounded order-1 md:col-span-8 md:order-0 px-3">
          {products.map(product => <CartItem key={product.id} {...product} />)}
        </div>

        <div className="border border-primary rounded md:col-span-4 md:order-1 h-fit p-3">
          <div>
            <span className="text-primary font-semibold text-lg ml-2">
              تعداد محصولات :
            </span>
            <span>{itemsCounter}</span>
          </div>

          <div className="mb-6 mt-1">
            <span className="text-primary font-semibold text-lg ml-2">
              مجموع سبد خرید :
            </span>
            <span>{total} تومان</span>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={checkOut}
              className="bg-primary text-white rounded-md transition hover:bg-primaryHover py-1 px-2"
            >
              تکمیل خرید
            </button>
            <button onClick={clearCart} className="text-primary rounded-md p-1">
              پاک کردن سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;