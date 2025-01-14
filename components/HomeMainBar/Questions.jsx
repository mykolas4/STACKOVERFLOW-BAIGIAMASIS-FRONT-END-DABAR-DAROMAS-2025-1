import React from "react";
import styles from "@/components/HomeMainBar/styles.module.css";
import { Link } from "react-router-dom";
const Questions = ({}) => {
  return (
    <div className={styles.displayanscontainer}>
      <div className={styles.displayvotesans}>
        <p>{Questions.votes}</p>
        <p>votes</p>
        <div className={styles.displayvotesans}>
          <p>{Questions.noOfAnswers}</p>
          <p>answers</p>
        </div>
        <div className={styles.displayquestiondetails}>
          <ul>
            <li key={Questions.id}>
              <Link
                to={`/Questions/${Questions.id}`}
                className={styles.questiontitlelink}
              >
                {Questions.questionTitle}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Questions;
