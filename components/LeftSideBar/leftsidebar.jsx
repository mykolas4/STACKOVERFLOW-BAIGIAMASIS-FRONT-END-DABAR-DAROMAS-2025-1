import React from "react";
import styles from "@/components/LeftSideBar/styles.module.css";
import { NavLink } from "react-router-dom";

const leftsidebar = () => {
  return (
    <div className={styles.leftsidebar}>
      <nav className={styles.sidenav}>
        <NavLink to="/" className={styles.sidenavlinks} activeClass="active">
          <p>Home</p>
        </NavLink>
        <div className={styles.sidenavdiv}>
          <div>
            <p>PUBLIC</p>
            <NavLink to="/Questions">
              <p>Questions</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default leftsidebar;
