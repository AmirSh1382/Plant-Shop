import React from "react";

// React-router-dom
import { useNavigate } from "react-router-dom";

// Empty cart img
import emmptyCart from "../../asset/empty-cart-removebg-preview.png";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl w-full mt-20 px-5 mx-auto flex flex-1 items-center justify-center flex-col gap-y-2">
      <div className="text-primary text-xl font-semibold">
        سبد خرید شما خالی است !
      </div>
      <img className="mx-auto" alt="test" src={emmptyCart} />
      <button
        onClick={() => navigate("/store")}
        className="bg-primary text-white px-2 py-1 rounded-md transition hover:bg-primaryHover"
      >
        برگشت به فروشگاه
      </button>
    </div>
  );
};

export default EmptyCart;