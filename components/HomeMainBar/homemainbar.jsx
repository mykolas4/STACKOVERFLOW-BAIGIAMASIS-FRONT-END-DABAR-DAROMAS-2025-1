import React from "react";
import styles from "@/components/HomeMainBar/styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Questions from "./Questions";
import QuestionsDetails from "@/pages/Questions/QuestionsDetails";

const HomeMainBar = () => {
  const location = useLocation();
  const user = 1; 
  const navigate = useNavigate();

  const questionsList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "1 question",
      questionBody: "kmkmmkklm",
      questionTags: "knadskakds",
      userPosted: "jjkjk",
      askedOn: "feb",
    },
    {
      id: 2,
      votes: 3,
      noOfAnswers: 3,
      questionTitle: "2 questions",
      questionBody: "kmkmmkklm",
      questionTags: "knadskakds",
      userPosted: "jjkjk",
      askedOn: "feb",
    },
    {
      id: 3,
      votes: 5,
      noOfAnswers: 5,
      questionTitle: "3 questions",
      questionBody: "kmkmmkklm",
      questionTags: "knadskakds",
      userPosted: "jjkjk",
      askedOn: "feb",
    },
  ];

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

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

export default HomeMainBar;