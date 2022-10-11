import React, { useEffect, useState, useRef } from "react";

// Styles
import styles from "../../styles/Header.module.css";

// React-router-dom
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

const Header = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const cartState = useSelector(state => state.cartState)
  const { itemsCounter } = cartState

  const navRef = useRef();
  const hamburgerRef = useRef();

  const clickHandler = e => {
    if (hamburgerRef.current.contains(e.target)) return;

    if (!navRef.current.contains(e.target)) setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, []);

  return (
    <header className={`${styles.container} text-primary`}>
      <div className={styles.wrapper}>
        {/* Navbar */}
        <nav
          ref={navRef}
          className={`${styles.nav} ${isMenuOpen && styles.avtiveMenu}`}
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