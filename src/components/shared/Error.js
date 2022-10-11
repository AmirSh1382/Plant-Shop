import React from "react";

const Error = ({ msg }) => {
  return (
    <div className="flex max-w-6xl w-full flex-1 justify-center items-center mt-20 px-5 mx-auto">
      <span className="text-xl font-semibold">{msg}</span>
    </div>
  );
};

export default Error;