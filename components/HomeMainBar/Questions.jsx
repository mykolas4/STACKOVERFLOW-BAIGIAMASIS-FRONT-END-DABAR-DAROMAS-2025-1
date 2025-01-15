import React from "react";
import { Link } from "react-router-dom";
import styles from "@/components/HomeMainBar/styles.module.css"

const Questions = ({ questions }) => {
  return (
    <div className={styles.questionscontainer}>
      {questions.map(question => (
        <div className={styles.questioncard} key={question.id}>
          <h4 className={styles.questiontitle}>
            <Link to={`/questions/${question.id}`} className={styles.questionscontainer}>
              {question.questionTitle}
            </Link>
          </h4>
          <p className={styles.questionbody}>{question.questionBody}</p>
          <p className={styles.questionstats}>
            Votes: <span>{question.votes}</span> | Answers: <span>{question.noOfAnswers}</span>
          </p>
          <p className={styles.questionmeta}>
            Asked by: <strong>{question.userPosted}</strong> on <em>{question.askedOn}</em>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Questions;