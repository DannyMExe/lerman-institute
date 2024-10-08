import React, { useState } from "react";
import styles from "./ShowMore.module.css";

const ShowMore = ({ text, maxCharacters }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayText = showMore ? text : text.substr(0, maxCharacters).trim();
  const displayEllipsis = !showMore && text.length > maxCharacters ? "..." : "";

  return (
    <div className={styles.textContainer}>
      <p
        className={styles.bg}
        dangerouslySetInnerHTML={{ __html: displayText + displayEllipsis }}
      />
      {text.length > maxCharacters && (
        <button className={styles.showMoreButton} onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ShowMore;
