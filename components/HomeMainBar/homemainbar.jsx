import React from "react";
import styles from "@/components/HomeMainBar/styles.module.css";
import { Link, useLocation } from "react-router-dom";
import QuestionList from "./QuestionList";
import Questions from "./Questions"
const homemainbar = () => {
  const questionsList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "1 question",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
    },
    {
      id: 2,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "2 question",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
    },
    {
      id: 3,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "2 question",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
    },
  ];

  const location = useLocation();

  return (
    <div className={styles.mainbar}>
      <div className={styles.mainbarheader}>
        {location.pathname === "/" ? (
          <h1>Top questions</h1>
        ) : (
          <h1>All questions</h1>
        )}
        <Link to="/AskQuestion" className={styles.askbtn}>
          Ask question
        </Link>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions </p>
            <Questions />
          </>
        )}
      </div>
    </div>
  );
};

export default homemainbar;
