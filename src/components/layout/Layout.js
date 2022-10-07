import React, { useState } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [minHeight, setMinHeight] = useState(visualViewport.height + "px");

  window.addEventListener("resize", () => {
    setMinHeight(visualViewport.height + "px");
  });

  return (
    <div style={{ minHeight }} className="flex flex-col">
      <Header />

      <div className="max-w-6xl w-full pt-24 px-5 mx-auto">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;