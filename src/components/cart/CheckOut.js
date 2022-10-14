import React from "react";

// Redux
import { useDispatch } from "react-redux";
import { clearCartAction } from "../../redux/cart/cartActions";

// React-router-dom
import { useNavigate } from "react-router-dom";

// tick icon
import purchaseSuccessIcon from "../../asset/Purchase_Success.png"

const CheckOut = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const clickHandler = () => {
    navigate("/store")

    dispatch(clearCartAction())
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center max-w-6xl w-full gap-y-2 mt-20 px-5 mx-auto">
      <div className="text-primary text-xl font-semibold">
        خرید شما با موفقیت انجام شد :)
      </div>

      <img 
        src={purchaseSuccessIcon}
        alt="successfull purchase" 
        className="w-full max-w-[500px] px-5" 
      />

      <button
        onClick={clickHandler}
        className="bg-primary text-white rounded-md transition hover:bg-primaryHover px-2 py-1 mt-2"
      >
        بازگشت به فروشگاه
      </button>
    </div>
  );
};

export default CheckOut;