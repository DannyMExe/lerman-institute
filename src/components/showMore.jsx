import React, { useState } from "react";
import styles from "./ShowMore.module.css";

const ShowMore = ({ text, maxCharacters }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayText = showMore ? text : text.slice(0, maxCharacters);

  return (
    <div>
      <p className={styles.bg}>{displayText}</p>
      {text.length > maxCharacters && (
        <button onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ShowMore;
