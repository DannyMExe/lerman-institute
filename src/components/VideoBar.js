"use client";
import React from "react";
import Youtube from "react-youtube";
import styles from "./VideoBar.module.css";
import ShowMore from "./showMore";

const VideoBar = ({ videos, home, nodesc, featured, compact }) => {
  const containerClasses = [
    styles.videoContainer,
    home ? styles.home : "",
    featured ? styles.featured : "",
    compact ? styles.compact : "",
  ]
    .filter(Boolean)
    .join(" ");

  // Featured layout - horizontal cards with large video
  if (featured) {
    return (
      <div className={containerClasses}>
        {videos.map((video, idx) => (
          <div key={idx} className={styles.video}>
            <div className={styles.videoEmbed}>
              <Youtube videoId={video.id} />
            </div>
            <div className={styles.videoContent}>
              <h3>{video.title}</h3>
              {video.studentInfo && (
                <p className={styles.studentInfo}>{video.studentInfo}</p>
              )}
              {video.desc && (
                <p
                  className={styles.descriptionText}
                  dangerouslySetInnerHTML={{ __html: video.desc }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Compact grid layout
  if (compact) {
    return (
      <div className={containerClasses}>
        {videos.map((video, idx) => (
          <div key={idx} className={styles.video}>
            <div className={styles.videoEmbed}>
              <Youtube videoId={video.id} />
            </div>
            <div className={styles.videoContent}>
              <h3>{video.title}</h3>
              {video.desc && (
                <p className={styles.shortDesc}>{video.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Standard grid layout
  return (
    <div className={containerClasses}>
      {videos.map((video, idx) => (
        <div key={idx} className={styles.video}>
          <div className={styles.videoEmbed}>
            <Youtube videoId={video.id} />
          </div>
          <h3>{video.title}</h3>
          {video.studentInfo && (
            <p className={styles.studentInfo}>{video.studentInfo}</p>
          )}
          {!nodesc && video.desc && (
            <ShowMore text={video.desc} maxCharacters={250} />
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoBar;
