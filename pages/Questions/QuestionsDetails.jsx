import React from "react";
import { useParams } from "react-router-dom";
import styles from "@/pages/Questions/styles.module.css";
import Questions from "./Questions";

const QuestionsDetails = ({questions }) => {
  const { id } = useParams();

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
      noOfAnswers: 3,
      questionTitle: "2 questions",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
    },
    {
      id: 3,
      votes: 5,
      noOfAnswers: 5,
      questionTitle: "3 questions",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
    },
  ];

  const questionId = parseInt(id); 

  const questionDetail = questionsList.find((question) => question.id === questionId);

  return (
    <div className={styles.mainbar}>
      <div className={styles.mainbarheader}>
        {location.pathname === "/" ? (
          <h1>Top questions</h1>
        ) : (
          <h1>All questions</h1>
        )}
        <button onClick={checkAuth} className={styles.askbtn}>
          Ask question
        </button>
      </div>

      <>
      <p>{questionsList.length} questions</p>
      <Questions questions={questionsList} /> 
      </>
    </div>
  );
};

export default QuestionsDetails;