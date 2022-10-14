import React, { useEffect, useState } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

// Redux
import { useDispatch ,useSelector } from "react-redux"

// React toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Functions
import { getUserDataFromCookie } from "../../helper/functions";

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  const { darkMode } = useSelector(state => state.themeState)

  const [ minHeight, setMinHeight ] = useState(visualViewport.height + "px");

  useEffect(() => {
    dispatch({type: "GET_LOCAL_THEME"});

    document.cookie && dispatch(getUserDataFromCookie())

    darkMode 
     ? document.documentElement.classList.add("dark")
     : document.documentElement.classList.remove("dark")

    const calculateMinHeight = () => setMinHeight(visualViewport.height + "px");

    window.addEventListener("resize", calculateMinHeight);

    return () => window.removeEventListener("resize", calculateMinHeight)
  }, [darkMode, dispatch])

  return (
    <div style={{ minHeight }} className="flex flex-col">
      <Header />

      <ToastContainer rtl />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;