import React, { useState } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [ minHeight, setMinHeight ] = useState(visualViewport.height + "px");

  window.addEventListener("resize", () => {
    setMinHeight(visualViewport.height + "px");
  });

  return (
    <div style={{ minHeight }} className="flex flex-col">
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;