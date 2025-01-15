import React from "react";
import { useParams } from "react-router-dom";
const QuestionsDetails = () => {
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

  return (
    <div className={styles.questiondetailspage}>
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question.id === id)
            .map((question) => {})}
            <div key={question.id}>
                <section className={styles.quesitonsdetailscontainer}>
                    <h1>{Questions.questionTitle}</h1>
                    <div>

                    </div>
                </section>
            </div>
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
