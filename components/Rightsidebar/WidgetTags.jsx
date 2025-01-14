import React from "react";
import styles from "../Rightsidebar/styles.module.css";
const WidgetTags = () => {
  const tags = ["javascript"];
  return (
    <div className={styles.widgettags}>
      <h3>Related tags</h3>
      <div className={styles.widgettagsdiv}>
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;