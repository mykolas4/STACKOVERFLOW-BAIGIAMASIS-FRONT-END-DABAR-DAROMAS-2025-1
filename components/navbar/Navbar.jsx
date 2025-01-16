import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styles from "@/components/navbar/styles.module.css";
const Navbar = () => {

  const user = 123
  return (
    <nav>
      <div className={styles.navbar}>
        <Link to="/" className="nav-item nav-btn">
          <img src={logo.src} alt="logo" width="200" height="100"></img>
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          OverFlow AI
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
        </form>
        <Link to="/Auth" className={styles.navlinks}>
          Log in
        </Link>
        <>
          <Link to="/" className={styles.logout}>
            Log out
          </Link>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
