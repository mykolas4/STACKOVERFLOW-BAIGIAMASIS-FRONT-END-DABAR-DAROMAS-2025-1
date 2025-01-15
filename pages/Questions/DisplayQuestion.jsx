import React from "react";
import LeftSideBar from "@/components/LeftSideBar/leftsidebar";
import Rightsidebar from "@/components/Rightsidebar/rightsidebar";
import QuestionsDetails from "./QuestionsDetails";


const DisplayQuestion = () => {
  return (
    
      <div className={styles.homecontainer}>
        <LeftSideBar />
        <Questions />
        <div className={styles.homecontainer2}>
            <QuestionsDetails />
          <Rightsidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
