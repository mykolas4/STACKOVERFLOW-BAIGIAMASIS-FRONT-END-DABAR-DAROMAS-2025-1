import React from "react";
import styles from "@/components/HomeMainBar/styles.module.css"
const Questions = ({ question }) => {
  return (
    <div className={styles.displayanscontainer}>
        <div className={styles.displayvotesans}>
            <p>{Questions.votes}</p>
        </div>
    </div>
  );
};

export default Questions;
