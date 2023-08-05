"use client";
import React from "react";
import Youtube from "react-youtube";
import styles from "./VideoBar.module.css"; // Import the CSS module
import ShowMore from "./showMore";

const VideoBar = ({ videos, home }) => {
  const options = {};

  return (
    <div className={`${styles.videoContainer} ${home ? styles.home : ""}`}>
      {videos.map((video, idx) => {
        return (
          <div key={idx} className={styles.video}>
            <Youtube videoId={video.id} opts={options} />
            <h3 className={styles.bg}>{video.title}</h3>
            <p className={styles.studentInfo}>{video.studentInfo}</p>
            {/* <p className={styles.bg}>{video.desc}</p> */}
            <ShowMore text={video.desc} maxCharacters={250} />
          </div>
        );
      })}
    </div>
  );
};

export default VideoBar;
