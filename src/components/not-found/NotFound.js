import React from "react";

// React-router-dom
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-1 flex-1 justify-center items-center mt-20 mx-auto">
      <span className="text-9xl text-primary">404</span>
      <span className="text-xl text-primary">صفحه مورد نظر یافت نشد !</span>
      <button
        onClick={() => navigate("/store")}
        className="bg-primary text-white rounded-md px-2 py-1 mt-5"
      >
        برگشت به فروشگاه
      </button>
    </div>
  );
};

export default NotFound;