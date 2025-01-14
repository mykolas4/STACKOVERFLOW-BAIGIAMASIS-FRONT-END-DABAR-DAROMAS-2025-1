import React from "react";
import styles from "@/components/LeftSideBar/styles.module.css";
import { NavLink } from "react-router-dom";

const leftsidebar = () => {
  return (
    <div className={styles.leftsidebar}>
      <nav className={styles.sidenav}>
        <NavLink
          to="/"
          className={styles.sidenavlinks}
          activeClassName="active"
        ></NavLink>
        <div className={styles.sidenavdiv}>
          <div>
            <p>Home</p>
            <NavLink
              to="/Questions"
              className={styles.sidenavlinks}
              activeClassName="active"
            >
              <p>Questions</p>
            </NavLink>
            <NavLink
              to="/Tags"
              className={styles.sidenavlinks}
              activeClassName="active"
            >
              <p>Tags</p>
            </NavLink>
            <NavLink
              to="/Users"
              className={styles.sidenavlinks}
              activeClassName="active"
            >
              <p>Users</p>
            </NavLink>
            <NavLink
              to="/Companies"
              className={styles.sidenavlinks}
              activeClassName="active"
            >
              <p>Companies</p>
            </NavLink>
            <NavLink
              to="/Jobs"
              className={styles.sidenavlinks}
              activeClassName="active"
            >
              <p>Jobs</p>
            </NavLink>
            <NavLink
              to="/Discussions"
              className={styles.sidenavlinks}
              activeClassName="active"
            >
              <p>Discussions</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default leftsidebar;
