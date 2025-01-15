import React from "react";
import styles from "@/pages/AskQuestion/styles.module.css";

const AskQuestion = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.askquescontainer}>
        <h1>Ask a public Question</h1>
        <form>
          <div className={styles.askformcontainer}>
            <label htmlFor={styles.askquestitle}>
              <h4>Title</h4>
              <h4>Title</h4>

              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                id="askquestitle"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor={styles.askquesbody}>
              <h4>Body</h4>

              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <input
                type="text"
                id="askquestitle"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor={styles.askquestitle}>
              <h4>Title</h4>

              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                type="text"
                id="askquestitle"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
