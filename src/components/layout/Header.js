import React, { useEffect, useState, useRef } from "react";

// Styles
import styles from "../../styles/Header.module.css";

// React-router-dom
import { Link } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch()
  
  const cartState = useSelector(state => state.cartState)
  const { itemsCounter } = cartState

  const { darkMode } = useSelector(state => state.themeState)

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isDarkModeMenuOpen, setIsDarkModeMenuOpen ] = useState(false)

  const navRef = useRef();
  const hamburgerRef = useRef();
  const testRef = useRef()
  const testRef1 = useRef()

  const changeTheme = () => {
    dispatch({type: "CHANGE_THEME", payload: !darkMode})
  }

  const clickHandler = e => {
    if (hamburgerRef.current.contains(e.target)) return;

    if (!navRef.current.contains(e.target)) setIsMenuOpen(false);

    if (testRef1.current.contains(e.target)) {
      return 
    } else if (!testRef.current.contains(e.target)) {
      setIsDarkModeMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, []);

  return (
    <header className={`${styles.container} bg-white shadow-light 
        dark:bg-black dark:shadow-dark text-primary`}>

      {/* Dark mode wrapper */}
      <div 
        className={`${styles.darkModeWrapper} ${isDarkModeMenuOpen && styles.open}`}
      >
        <div
          ref={testRef}
         className="bg-white shadow-light dark:shadow-dark dark:bg-black">
          <span className="text-black dark:text-white">حالت تاریک</span>

          <label className="relative items-center cursor-pointer">
            <input onChange={changeTheme} checked={darkMode} type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700
                peer-checked:after:translate-x-full peer-checked:after:border-white
                after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                after:bg-white after:border-gray-300 after:border after:rounded-full
                after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
          </label>
        </div>
      </div>
      
      <div className={styles.headerWrapper}>
        {/* Navbar */}
        <nav
          ref={navRef}
          className={`${styles.nav} ${isMenuOpen && styles.avtiveMenu} bg-white dark:bg-black`}
        >
          <ul>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/">
                فروشگاه
              </Link>
            </li>

            <li onClick={() => setIsMenuOpen(false)}>
              <span className="bg-primary text-white">
                {itemsCounter}
              </span>
              <Link to="/cart"> 
                سبد خرید
              </Link>
            </li>

            <li ref={testRef1} onClick={() => {setIsMenuOpen(false); setIsDarkModeMenuOpen(true)}}>
              حالت تاریک
            </li>

            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/about">
                درباره پروژه
              </Link>
            </li>
          </ul>
        </nav>

        {/* HamburgerIcon */}
        <div
          ref={hamburgerRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${styles.hamburger} ${isMenuOpen && styles.avtiveMenu}`}
        >
          <span className="bg-primary"></span>
          <span className="bg-primary"></span>
          <span className="bg-primary"></span>
        </div>

        {/* Login */}
        <div className={styles.login}>
          <Link to="/login">
            <span>ورود / ثبت نام</span>
            <i className="bi bi-box-arrow-in-left"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;