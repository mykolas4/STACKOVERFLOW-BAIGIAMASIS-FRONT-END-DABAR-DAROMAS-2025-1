import React from "react";
import { useParams } from "react-router-dom";
import styles from "@/pages/Questions/styles.module.css";

const QuestionsDetails = () => {
  const { id } = useParams();

  const questionsList = [
    {
      id: '1',
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "1 question",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
    },
    {
      id: '2',
      votes: 3,
      noOfAnswers: 3,
      questionTitle: "2 questions",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
    },
    {
      id: '3',
      votes: 5,
      noOfAnswers: 5,
      questionTitle: "3 questions",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
    },
  ];

  const question = questionsList.find((question) => question.id === id);

  return (
    <div className={styles.questiondetailspage}>
      {!question ? ( 
        <h1>Loading...</h1>
      ) : (
        <div key={question.id}>  
          <section className={styles.questionsdetailscontainer}>
            <h1>{question.questionTitle}</h1> 
            <div>
              <div className={styles.container}>
                <h1>{question.questionBody}</h1>
              </div>
              <p>{question.votes} votes</p>
              <p>{question.noOfAnswers} answers</p>
              <p>Asked by: {question.userPosted} on {question.askedOn}</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default QuestionsDetails;