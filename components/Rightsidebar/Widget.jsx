import React from "react";
import styles from "@/components/Rightsidebar/styles.module.css";

const Widget = () => {
  return (
    <div className={styles.widget}>
      <h1>The Overflow Blog </h1>
      <div className={styles.rightsidebardiv1}>
      <p>Robots building robots in a robotic factory</p>
      </div>
      <div className={styles.rightsidebardiv2}>
      <p>“Data is the key”: Twilio’s Head of R&D on the need for good data</p>
      </div>
      <h1>Featured on Meta </h1>
      <div className={styles.rightsidebardiv1}>
      <p>
      Results and next steps for the Question Assistant experiment in Staging Ground</p>
      </div>
      <div className={styles.rightsidebardiv2}>
      <p>
      Voting experiment to encourage people who rarely vote to upvote</p>
      </div>
    </div>
    
  );
};

export default Widget;
