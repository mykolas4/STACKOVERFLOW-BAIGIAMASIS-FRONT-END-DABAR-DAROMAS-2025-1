import React from "react";
import { Link } from "react-router-dom";

const Questions = ({ question }) => {
  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{Questions.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className="display-question-details">
        <Link
          to={`/Questions/${Questions._id}`}
          className="question-title-link"
        >
          {Questions.questionTitle > (window.innerWidth <= 400 ? 70 : 90)
            ? Questions.questionTitle.substring(
                0,
                window.innerWidth <= 400 ? 70 : 90
              ) + "..."
            : Questions.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags"></div>
          <p className="display-time">asked</p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
