import React from "react";

// React-spinner
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex max-w-6xl w-full flex-1 justify-center items-center mt-20 px-5 mx-auto">
      <PuffLoader color="rgba(64, 145, 119 , 1)" />
    </div>
  );
};

export default Loading;