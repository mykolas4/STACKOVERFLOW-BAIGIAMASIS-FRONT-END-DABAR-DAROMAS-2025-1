import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes"

const Index = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.index}>
      {isClient && (
        <Router>
          <Navbar />
          <Routes />
        </Router>
      )}
    </div>
  );
};

export default Index;