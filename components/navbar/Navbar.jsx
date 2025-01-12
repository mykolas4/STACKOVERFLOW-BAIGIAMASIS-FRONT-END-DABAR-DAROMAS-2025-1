import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import search from "@/assets/search.svg";
import avatar from "@/assets/avatar.svg";
import styles from "@/components/navbar/styles.module.css"

const Navbar = () => {
  const User = null;
  return (
    <nav>
      <div className={styles.navbar} >
        <Link to="/" className="nav-item nav-btn">
          <img src={logo.src} alt="logo" width="100" height="100"></img>
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
          <img src={search.src} alt="search" width="18" className="searchicon"/>
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Link to="">
              <Avatar>M</Avatar>
            </Link>
            <Button>Log out</Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
