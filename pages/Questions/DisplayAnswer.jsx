import React from "react";
import styles from "./styles.module.css"

const DisplayAnswer = ({ question }) => {
  if (!question || !Array.isArray(question.answer)) {
    return <p>No answers available.</p>;
  }

  return (
    <div>
      {question.answer.length > 0 ? ( 
        question.answer.map((ans) => (
          <div className={styles.displayans} key={ans.id}>
            <p>{ans.answerBody}</p>
            <div className={styles.questionactionsuser}>
              <div>
                <p>answered {ans.answeredOn}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No answers available.</p> 
      )}
    </div>
  );
};

export default DisplayAnswer;