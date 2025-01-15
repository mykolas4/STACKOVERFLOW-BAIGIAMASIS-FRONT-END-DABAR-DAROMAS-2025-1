import React from "react";
import LeftSideBar from "@/components/LeftSideBar/leftsidebar";
import HomeMainBar from "@/components/HomeMainBar/homemainbar";
import styles from "@/pages/Home/styles.module.css";
import rightsidebar from "@/components/Rightsidebar/rightsidebar";


const Questions = () => {
  return (
    <div className={styles.homecontainer}>
      <LeftSideBar />
      <div className={styles.homecontainer2}>
        <HomeMainBar />
      </div>
    </div>
  );
};

export default Questions;
