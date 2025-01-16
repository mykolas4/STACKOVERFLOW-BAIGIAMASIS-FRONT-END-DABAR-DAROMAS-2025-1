import React from "react";
import { useParams } from "react-router-dom";
import styles from "@/pages/Questions/styles.module.css";
import DisplayAnswer from "@/pages/Questions/DisplayAnswer";

const QuestionsDetails = () => {
  const { id } = useParams();

  const questionsList = [
    {
      id: "1",
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "1 question",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
      answerBody: "Answer",
    },
    {
      id: "2",
      votes: 3,
      noOfAnswers: 3,
      questionTitle: "2 questions",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
      answerBody: "Answer",
    },
    {
      id: "3",
      votes: 5,
      noOfAnswers: 5,
      questionTitle: "3 questions",
      questionBody: "kmkmmkklm",
      questionTags: ["knadskakds"],
      userPosted: "jjkjk",
      askedOn: "feb",
      answerBody: "Answer",
    },
  ];

  const question = questionsList.find((question) => question.id === id);

  return (
    <div className={styles.questiondetailspage1}>
      {!question ? (
        <h1></h1>
      ) : (
        <div key={question.id}>
          <section className={styles.questionsdetailscontainer1}>
            <h1>{question.questionTitle}</h1>
            <div>
              <div className={styles.container1}>
                <h1>{question.questionBody}</h1>
              </div>
              <p>{question.votes} votes</p>
              <p>{question.noOfAnswers} answers</p>
              <p>
                Asked by: {question.userPosted} on {question.askedOn}
              </p>
            </div>
          </section>
          <section className={styles.postanscontainer}>
            <h3>Your Answer</h3>
            <form>
              <textarea name="" id="" cols="30" rows="10"></textarea> <br />
              <input
                type="Submit"
                className={styles.postansbtn}
                value="Post Your Answer"
              />
            </form>
            <p>
              Thanks for contributing an answer to Stack Overflow! Please be
              sure to answer the question. Provide details and share your
              research! But avoid … Asking for help, clarification, or
              responding to other answers. Making statements based on opinion;
              back them up with references or personal experience. To learn
              more, see our tips on writing great answers.
            </p>
          </section>
          {question.noOfAnswers !== 0 && (
            <section>
              <h3>{question.noOfAnswers} answers</h3>
              <DisplayAnswer key={question.id} question={question} />
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionsDetails;
